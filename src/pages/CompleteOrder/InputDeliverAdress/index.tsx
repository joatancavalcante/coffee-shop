import { Input } from "../../../components/Input";
import { useFormContext } from "react-hook-form";
import { InputArea } from "./styles";

export function InputDeliverAdress(){

    const { register, formState } = useFormContext();
    const { errors } = formState;

    return (
        <InputArea>
            <Input id="cep" placeholder="CEP" width="12.5rem" error={String(errors.cep?.message)} register={register} />
            <Input id="street" placeholder="Rua" width="35rem" error={String(errors.street?.message)} register={register} />
            <Input id="number" placeholder="Número" width="12.5rem" error={String(errors.number?.message)} register={register} />
            <Input id="complement" placeholder="Complemento" width="21.5rem" error={String(errors.complement?.message)} register={register} />
            <Input id="district" placeholder="Bairro" width="12.5rem" error={String(errors.district?.message)} register={register} />
            <Input id="city" placeholder="Cidade" width="16.74rem" error={String(errors.city?.message)} register={register} />
            <Input id="uf" placeholder="UF" width="3.75rem" error={String(errors.uf?.message)} register={register}/>
        </InputArea>
    )
}