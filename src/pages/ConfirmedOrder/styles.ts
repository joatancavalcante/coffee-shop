import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
`;

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    h1 {
        width: 22.0625rem;
        height: 2.625rem;
        left: calc(50% - 22.0625rem/2 - 23.9375rem);
        top: 11.5rem;
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 800;
        font-size: 2rem;
        line-height: 130%;
        color: ${(props) => props.theme['yellowDark']};
    }

    h4 {
        width: 34.5rem;
        height: 1.625rem;
        left: calc(50% - 34.5rem/2 - 17.75rem);
        top: 14.375rem;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 130%;
        color: ${(props) => props.theme['subtitle']};
    }
`;

export const OrderInfoContainer = styled.div`
padding: 2.5rem;
border-radius: 6px 36px 6px 36px;
position: relative;
background: ${(props) => props.theme["backgroundDefault"]};
min-width: 32rem;
display: flex;
flex-direction: column;
gap: 2rem;
margin-top: 2.5rem;

@media (max-width: 550px) {
  min-width: 25rem;
}

&::before {
  content: "";
  position: absolute;
  inset: -1px;
  z-index: -1;
  border-radius: 7px 37px 7px 37px;
  background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
}
`;

export const OrderInfoDetailContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.6rem;
`;

type ImageOrderInfoDetailContainerProps = {
    customcolor: string;
}

export const ImageOrderInfoDetailContainer = styled.div<ImageOrderInfoDetailContainerProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    gap: 0.5rem;
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    background: ${(props) => props.customcolor};
`

export const TextOrderInfoDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    
    span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 130%;
        color: ${(props) => props.theme["text"]};        
    }

    strong {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 1rem;
        line-height: 130%;
        color: ${(props) => props.theme["text"]};
        text-transform: uppercase;
    }
`;

export const RightSide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30.75rem;
    height: 18.3125rem;    
    margin-top: 6.25rem;
    margin-left: 6.25rem;
`;