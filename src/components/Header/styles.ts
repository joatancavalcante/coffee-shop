import { styled } from "styled-components";

export const Container = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    max-width: 70rem;
    margin: 2rem auto 0px;  
    justify-content: space-between;
    height: 6.5rem;
`;

export const LogoImageContainer = styled.div`
    flex: 1;
    &:hover {
        cursor: pointer;
    }    
`;

export const LogoImage = styled.img`
    
`;

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 0.75rem;
`;

export const LocationButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 4px;
    width: 8.9375rem;
    height: 2.375rem;
    background-color: ${(props) => props.theme['purpleLight']};   
    border: none;
    border-radius: 6px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme['purpleDark']};
`;

export const CartButton = styled.button`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border: none;

    width: 2.375rem;
    height: 2.375rem;

    background: ${(props) => props.theme['yellowLight']};
    border-radius: 6px;

    &:hover {
        cursor: pointer;
    }
`;

export const CartBadge = styled.span`
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    width: 20px;
    height: 20px;
    right: -8.35px;
    top: -8px;
    background: ${(props) => props.theme['yellowDark']};
    color: ${(props) => props.theme['backgroundDefault']};
    border-radius: 1000px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 130%;
    text-align: center;
`;