const layout = {
  layout: {
    full: {
      maxWidth: "100%",
    },
    box: {
      width: "100%",
      maxWidth: "1300px",
      mx: "auto",
      //pt: [4, 4, 4],
      //pb: [5, 5, 5],
      //px: [3, 3, 0],
      px: [2, 4, 0],
      noPadding: {
        maxWidth: "1300px",

        mx: "auto",
      },
    },
    narrow: {
      maxWidth: ["768px"],
      mx: "auto",
      px: [4, 4, null],
      py: [4, 4, 4],
    },
    narrowExtra: {
      maxWidth: ["500px"],
      mx: "auto",
      px: [4, 4, null],
      pb: [4, 4, 4],
    },
    section: {
      stickyCol: {
        width: ["50%"],
        position: "sticky",
        top: "0px",
        alignSelf: "flex-start",
        overflowY: "auto",
      },
      col: {
        width: ["50%"],
        //fontSize: [4],
        //letterSpacing: [2],
        //justifyContent: "center",
      },
    },
  },
};

export default layout;
