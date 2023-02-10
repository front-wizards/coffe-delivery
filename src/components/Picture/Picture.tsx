import React from 'react'

interface ImageType {
  width: number;
  height: number;
}

interface PictureProps {
  image: string;
  dimensions: ImageType;
}

const Picture = (props : PictureProps) => {
  return (
    <img src={props.image} height={`${props.dimensions.height}px`} width={`${props.dimensions.width}px`} />
  )
}

export default Picture