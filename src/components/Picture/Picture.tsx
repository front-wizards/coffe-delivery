import React from "react";
import { StyledPicture } from "./Picture.styles";

interface ImageType {
  width: number;
  height: number;
}

interface PictureProps {
  image: string;
  dimensions: ImageType;
  isBig?: boolean;
}

const Picture = (props: PictureProps) => {
  if (props.isBig) {
    return (
      <StyledPicture
        src={props.image}
        height={`${props.dimensions.height}px`}
        width={`${props.dimensions.width}px`}
      />
    );
  }
  return (
    <img
      src={props.image}
      height={`${props.dimensions.height}px`}
      width={`${props.dimensions.width}px`}
    />
  );
};

export default Picture;
