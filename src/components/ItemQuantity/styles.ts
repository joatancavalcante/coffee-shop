import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    gap: 0.45rem;
    width: 4.5rem;
    height: 2.375rem;
    background: ${(props) => props.theme['button']};
    border-radius: 0.375rem;
`;

export const IncreaseDecreaseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: ${(props) => props.theme['button']};
    &:hover{        
        opacity: 0.8;
    }
`;

export const Quantity = styled.span`
    width: 20px;
    height: 21px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    text-align: center;
    color: ${(props) => props.theme['title']};
`;