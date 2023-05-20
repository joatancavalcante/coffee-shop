import { styled } from "styled-components";

interface StyledPaymentOptionTypeProps extends React.HTMLProps<HTMLButtonElement> {
    selected?: boolean;
}

export const Container = styled.button<StyledPaymentOptionTypeProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    gap: 0.75rem;

    width: 11.125rem;
    height: 3.1875rem;
    background: ${(props) => props.selected ? props.theme['purpleLight'] : props.theme['button']};
    border-radius: 0.375rem;
    border: ${(props) => props.selected ? '1px solid #8047F8' : 'none'};

    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }

    span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 160%;
        text-transform: uppercase;
        color: ${(props) => props.theme['text']};
    }
`;