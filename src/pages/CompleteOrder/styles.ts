import { styled } from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
`;

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 0.75rem;
    margin-top: 0.9375rem;

    width: 40rem;
    height: 36.9375rem;
`;

export const Title = styled.span`
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['subtitle']};    
`;

export const AdreesInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme['card']}; 
    padding: 2.5rem;
`;

export const AdressHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const InfoHeader = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 0.75rem;
    gap: 0.125rem;

    span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 130%;
        display: flex;
        align-items: center;
        color: ${(props) => props.theme['subtitle']};
    }

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 130%;
        display: flex;
        align-items: center;
        color: ${(props) => props.theme['text']};
    }
`;

export const PaymentInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme['card']}; 
    padding: 2.5rem;  
    width: 100%;
    gap: 2rem;
`;

export const PaymentOptionsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
`;

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
    margin-top: 0.9375rem;

    width: 28rem;
    height: 33.5rem;
`;

export const OrderSummaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme['card']}; 
    padding: 2.5rem;   
    width: 100%; 
    border-radius: 6px 44px;
`;

export const ItemOrderSummary = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0.5rem 0.25rem;
    margin: 1.5rem 0px; 
    width: 23rem;
    height: 5rem;

    img {
        width: 64px;
        height: 64px;
    }
`;

export const ImageAndDescriptionAndButtonsArea = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.25rem;
    width: 20.125rem;
`;

export const DescriptionAndButtonsArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 130%;
        display: flex;
        align-items: center;
        color: ${(props) => props.theme['subtitle']}; 
    }
`;

export const ButtonsArea = styled.div`
    display: flex;
    flex-direction: row;   
    gap: 0.5rem; 
`;

export const RemoveButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 0.5rem;
    gap: 0.25rem;

    width: 5.6875rem;
    height: 2.375rem;

    background: ${(props) => props.theme['button']};
    border-radius: 6px;
    border: none;

    &:hover{        
        border: 0.1px solid ${(props) => props.theme["purple"]};
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

export const ValueArea = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 6.25rem;
    justify-content: flex-end;

    span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 1rem;
        line-height: 130%;
        display: flex;
        align-items: center;
        text-align: right;
        color: ${(props) => props.theme['text']};
    }
`;

export const ItemSeparator = styled.div`
    display: flex;
    border-bottom: 1px solid ${(props) => props.theme["button"]};
`;

export const TotalizerArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 0.75rem;
    margin-top: 1rem;

    width: 23rem;
    height: 5.75rem;
`;

export const ItemsTotalizerArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 0.5rem;

    width: 23rem;
    height: 1.3125rem;

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 130%;
        display: flex;
        align-items: center;
        text-align: right;
        color: ${(props) => props.theme["text"]};
    }

    span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;
        display: flex;
        align-items: center;
        text-align: right;
        color: ${(props) => props.theme["text"]};
    }
`;

export const OrderTotalizerArea = styled(ItemsTotalizerArea)`
    height: 1.625rem;

    strong {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 130%;
        display: flex;
        align-items: center;
        text-align: right;
        color: ${(props) => props.theme["subtitle"]};
    }
`;

export const OrderConfirmButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.75rem 0.5rem;
    gap: 0.25rem;

    width: 23rem;
    height: 2.875rem;
    background: ${(props) => props.theme["yellow"]};
    border-radius: 6px;
    border: none;
    margin-top: 1rem;

    &:hover {
        opacity: 0.9;
        cursor: pointer;
    }

    span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 0.875rem;
        line-height: 160%;
        text-transform: uppercase;
        color: #FFFFFF;
        font-stretch: 100;
    }
`;