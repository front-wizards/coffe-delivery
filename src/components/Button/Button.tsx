import React from "react";
import { Icon } from "../Icon/Icon";

import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  iconName?: "purpleCart" | "yellowCart" | "plus" | "minus" | "remove";
}

export function Button({ iconName, title, ...rest }: ButtonProps) {
  return (
    <button type="button" {...rest}>
      <Icon name={iconName} />
      {title}
    </button>
  );
}
