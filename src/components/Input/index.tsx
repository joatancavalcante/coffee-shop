import { InputContent, StyledInput } from "./styles";
import {
    FieldValues,
    UseFormRegister,
  } from "react-hook-form";

interface inputProps {
    id: string;
    placeholder: string;
    width: string;
    error?: string;
    register: UseFormRegister<FieldValues>;
}

export function Input({id, placeholder, width, error, register}: inputProps){
    return (
        <InputContent width={width}>
            <StyledInput
                id={id}
                placeholder={placeholder}
                width={width}
                {...(register && register(id))}
            />
            {error && error != "undefined" && <p>{error}</p>}
        </InputContent>
    )
}