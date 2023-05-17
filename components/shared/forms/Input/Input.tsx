import React from "react";
import Icon, { IconVariantType } from "../../Icon/Icon";
import classNames from "classnames";

type Props = {
  placeholder: string;
  name: string;
  icon?: IconVariantType;
  type?: string;
};

const Input: React.FC<Props> = ({ type = "text", placeholder, name, icon }) => {
  return (
    <fieldset className="relative mb-7">
      <label>
        {icon ? (
          <Icon
            className="absolute top-1/2 left-5 -translate-y-1/2 text-2xl text-white"
            variant={icon}
          />
        ) : null}

        <input
          className={classNames(
            "w-full p-5 bg-slate-500 rounded-3xl text-lg placeholder:text-gray-500 text-white",
            { "pl-16": icon }
          )}
          type={type}
          placeholder={placeholder}
          name={name}
        />
      </label>
    </fieldset>
  );
};

export default Input;
