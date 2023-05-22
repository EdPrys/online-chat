import React, { InputHTMLAttributes } from "react";
import Icon, { IconVariantType } from "../../Icon/Icon";
import classNames from "classnames";
import { FieldErrors } from "react-hook-form";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  icon?: IconVariantType;
  errors: FieldErrors;
};

const Input: React.ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { type = "text", placeholder, name, errors, icon, ...props },
  ref
) => {
  const fieldError = errors[`${name}`];
  return (
    <fieldset className="mb-7">
      <label className="relative">
        {icon ? (
          <Icon
            className="absolute top-1/2 left-5 -translate-y-1/2 text-2xl text-white"
            variant={icon}
          />
        ) : null}

        <input
          ref={ref}
          className={classNames(
            "w-full p-5 bg-slate-500 rounded-3xl text-lg placeholder:text-gray-500 text-white border border-transparent",
            { "pl-16": icon, "border-b-red-500": fieldError }
          )}
          type={type}
          placeholder={placeholder}
          name={name}
          {...props}
        />
      </label>

      {fieldError && (
        <p className="text-red-500 text-lg mt-5">
          {fieldError?.message?.toString()}
        </p>
      )}
    </fieldset>
  );
};

export default React.forwardRef(Input);
