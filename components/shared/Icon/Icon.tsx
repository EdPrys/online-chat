import React from "react";
import classNames from "classnames";

import style from "./Icon.module.scss";

export type IconVariantType =
  | "information"
  | "attachment"
  | "bubble-speech"
  | "chat"
  | "edit"
  | "information"
  | "lock"
  | "mail"
  | "plane"
  | "power"
  | "remove"
  | "search"
  | "user";

type Props = {
  variant: IconVariantType;
  className?: string;
};

const Icon: React.FC<Props> = ({ variant, className }) => {
  return (
    <i
      className={classNames(
        "text-2xl",
        style.icon,
        style[`icon-${variant}`],
        className
      )}
      aria-hidden={true}
    ></i>
  );
};

export default Icon;
