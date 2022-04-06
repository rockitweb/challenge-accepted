/** @jsx jsx */
import { Grid, jsx } from "theme-ui";
import React from "react";
import { Icon } from "@iconify/react";

export type SocialProps = {};
export const Social: React.FC<SocialProps> = ({}) => {
  const iconSize = "20";
  return (
    <Grid py={3} color="muted" columns={4}>
      <Icon icon="fa:facebook" height={iconSize} />
      <Icon icon="fa:linkedin" height={iconSize} />
      <Icon icon="fa:envelope" height={iconSize} />
      <Icon icon="fa:phone" height={iconSize} />
    </Grid>
  );
};

export default Social;
