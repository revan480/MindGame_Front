import React from "react";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";

const InputField = ({
  label,
  name,
  type,
  placeholder,
  register,
  onChange,
  required,
  errorMsg,
  className,
  inputClassName,
}) => {
  return (
    <div className={twMerge("relative flex flex-col mb-4 w-full", className)}>
      {/* label */}
      {!!label && (
        <label htmlFor={name} className="text-xs font-medium">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      {/* input */}
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name, {
          onChange: (e) => {
            !!onChange && onChange(e);
          },
        })}
        className={twMerge(
          `${
            errorMsg ? "bg-red-500 bg-opacity-20" : "bg-darkener-100"
          } p-3 text-neutral-500 text-xs font-bold rounded-lg shadow-[inset_0px_3px_6px_rgba(0,0,0,.4)]`,
          inputClassName
        )}
      />

      {/* error message */}
      {!!errorMsg && <p className="absolute top-full left-0 text-red-500 text-xs">asdasd</p>}
    </div>
  );
};

export default InputField;
