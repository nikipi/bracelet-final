import React from "react";

export default function ProductOptions({
  name,
  values,
  selectedOptions,
  setOptions,
}: any) {
  return (
    <fieldset className="mt-3">
      <div className="inline-flex items-center flex-wrap gap-3">
        {values.map((value: any) => {
          const id = `option-${name}-${value}`;
          const checked = selectedOptions[name] === value;

          return (
            <label key={id} htmlFor={id}>
              <input
                className="sr-only"
                type="radio"
                id={id}
                name={`option-${name}`}
                value={value}
                checked={checked}
                onChange={() => {
                  setOptions(name, value);
                }}
              />
              <div
                className={`px-4 py-2 border rounded-md text-sm cursor-pointer hover:bg-[#f8f5f0]
 ${checked ? "bg-[#f8f5f0] border-[#c9a87c] " : "border-gray-200 bg-white"}`}
              >
                <span className="px-2">{value}</span>
              </div>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
