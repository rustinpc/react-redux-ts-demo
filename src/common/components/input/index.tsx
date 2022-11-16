import React, { ChangeEvent } from "react";
import { InputContainer } from "./styles";

interface ComponentProps {
  inputValue: string;
  inputType: 'text';
  onInputChange: (ev: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<ComponentProps> = ({ inputValue, onInputChange, inputType }) => {
  return (
    <InputContainer>
      <input
        data-testid="input-component"
        type={inputType}
        onChange={(ev: ChangeEvent<HTMLInputElement>) => {
          onInputChange(ev);
        }}
        value={inputValue}
      />
    </InputContainer>
  );
};

export default Input;