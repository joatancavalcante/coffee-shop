import { styled } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 16rem;
    height: 19.375rem;
    background-color: ${(props) => props.theme['card']}; 
    border-radius: 0.375rem 2.25rem;
    padding: 0rem 1.25rem 1.25rem 1.25rem;
    margin-top: 2.2rem;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    text-align: center;

    img{
        margin-top: -6.25rem;
        margin-bottom: 0.75rem;
    }

    span {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0.25rem 0.5rem;
        width: 9.0625rem;
        height: 1.3125rem;
        background: ${(props) => props.theme["yellowLight"]};
        border-radius: 6.25rem;
        margin-top: 0.2rem;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 0.625rem;
        line-height: 130%;
        text-transform: uppercase;
        color: ${(props) => props.theme["yellowDark"]};
    }

    strong{
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 130%;
        display: flex;
        align-items: flex-end;
        text-align: center;
        color: ${(props) => props.theme["subtitle"]};
        margin-top: 1.6rem;
    }

    label{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 130%;
        text-align: center;
        color: ${(props) => props.theme["label"]};
        margin-top: 0.2rem;
    }
`;

export const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const FooterLeftSide = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
    gap: 0.2rem;
`;

export const FooterRightSide = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
`;

export const CartButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border: none;

    width: 2.375rem;
    height: 2.375rem;

    background: ${(props) => props.theme['purpleDark']};
    border-radius: 6px;

    &:hover { 
        opacity: 0.8;
        cursor: pointer;
    }
`;

export const Coin = styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    text-align: right;
    color: ${(props) => props.theme['text']};
`;

export const ItemValue = styled.span`
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 130%;
    text-align: right;
    color: ${(props) => props.theme['text']};
`;