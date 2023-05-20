import { styled } from "styled-components";

interface BaseInputProps {
    width: string
}

export const InputContent = styled.div<BaseInputProps>`
    display: flex;
    flex-direction: column;
    width: ${(props) => props.width};
    height: 3.1rem;

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        margin-top: 2px;
        font-size: 12px;
        color: red;  
    }
`;

const BaseInput = styled.input<BaseInputProps>`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.75rem;
    gap: 0.25rem;

    width: ${(props) => props.width};
    height: 2.625rem;

    background: #EEEDED;

    border: 0.0625rem solid #E6E5E5;
    border-radius: 0.25rem;

    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px ${(props) => props.theme["purple"]};
    }
`

export const StyledInput = styled(BaseInput)`

`;