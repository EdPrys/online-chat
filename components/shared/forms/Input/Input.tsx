import React from "react";
import Icon, { IconVariantType } from "../../Icon/Icon";

type Props = {
  placeholder: string;
  name: string;
  icon: IconVariantType;
  type?: string;
};

const Input: React.FC<Props> = ({ type = "text", placeholder, name, icon }) => {
  return (
    <fieldset className="relative mb-7">
      <label>
        <Icon
          className="absolute top-1/2 left-5 -translate-y-1/2 text-2xl text-white"
          variant={icon}
        />
        <input
          className="w-full py-5 pr-5 pl-16 bg-slate-500 rounded-3xl text-lg placeholder:text-gray-500 text-white"
          type={type}
          placeholder={placeholder}
          name={name}
        />
      </label>
    </fieldset>
  );
};

export default Input;
