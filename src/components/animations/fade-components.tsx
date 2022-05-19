import React from "react";
import { Fade } from "react-reveal";
import withReveal from "react-reveal/withReveal";
import { Heading, Paragraph } from "theme-ui";

export const FadeParagraph = withReveal(Paragraph, <Fade top />);
export const FadeHeading = withReveal(Heading, <Fade top />);
