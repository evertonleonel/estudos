import React, { useState, useRef } from "react";

const ValidationForm = () => {
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const refs = useRef<HTMLInputElement[]>([]);

  const handleChange = (index: number, value: string) => {
    setCode((prevCode) => {
      const newCode = [...prevCode];
      newCode[index] = value;
      return newCode;
    });

    if (value !== "" && index < code.length - 1) {
      refs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && code[index] === "") {
      e.preventDefault();
      refs.current[index - 1]?.focus();
      handleChange(index - 1, "");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Digite o código de validação</h1>
      <div className="grid grid-cols-6 gap-4">
        {code.map((value, index) => (
          <input
            key={index}
            type="text"
            inputMode="numeric"
            pattern="\d"
            value={value}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            ref={(ref) => ref && (refs.current[index] = ref)}
            className="border-2 rounded-md w-10 h-10 text-center font-bold"
            maxLength={1}
          />
        ))}
      </div>
    </div>
  );
};

export default ValidationForm;
