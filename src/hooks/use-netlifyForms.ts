import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { navigate } from "gatsby";

const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export type FieldHTML = {
  field: string;
  html: string;
};

export function useNetlify<T>(
  redirect?: string,
  fieldHtml: FieldHTML[] = [],
  fieldOrder: string[] = []
) {
  const form = useForm<T>({
    mode: "onBlur",
  });

  const [serverState, setServerState] = useState<{
    submitting: boolean;
    status: { ok: boolean; msg: string } | null;
  }>({
    submitting: false,
    status: null,
  });

  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    console.log("aa");
    console.log("xx");
    if (ok) {
      form.reset();

      if (redirect) {
        navigate(`/${redirect}`);
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //console.log("bb");
    setServerState({ submitting: true, status: null });

    form.handleSubmit(
      (data) => {
        //console.log("on submit", data);
        //return;
        fieldHtml.forEach((f) => {
          //global search and replace.
          const findPattern: string = `{{${f.field}}}`;
          const regEx = new RegExp(findPattern, "g");
          //replace merge tags
          const mergedData = (data[f.field] = f.html.replace(
            regEx,
            data[f.field]
          ));
          data[f.field] = mergedData;
        });

        const formatter = function (value) {
          if (value instanceof Date) {
            return value.toLocaleDateString("en-au", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            });
          }

          return value;
        };

        let formattedData = {};

        //if fied order isn't passed in then use the defaukt.
        if (fieldOrder.length === 0) {
          fieldOrder = Object.keys(data);
        }
        fieldOrder.forEach((field) => {
          formattedData[field] = formatter(data[field]);
        });

        // const formattedData = JSON.parse(
        //   JSON.stringify(data, stringifyOverrider)
        // );

        //console.log(formattedData, JSON.stringify(formattedData));
        //return;
        try {
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact-form", ...formattedData }),
          }).then((response) => {
            handleServerResponse(response.ok, response.statusText);
          });
        } catch (e) {
          console.log("err", e);
        }
      },
      (error) => {
        console.log("err", error);
      }
    )(e);
  };

  useEffect(() => {}, [form]);

  //   useEffect(() => {
  //     const frm = useForm<T>({
  //       mode: "onBlur",
  //     });
  //     //setForm(frm);
  //     //console.log("register", form.register);
  //   }, []);
  //   const onSubmit = () => {};

  //return [form, onSubmit, serverState] as const;
  return [form, onSubmit, serverState] as const;
}
