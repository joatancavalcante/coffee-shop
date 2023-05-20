import { Container, 
    LeftSide, 
    OrderInfoContainer, 
    RightSide, 
    OrderInfoDetailContainer,
    TextOrderInfoDetailContainer, 
    ImageOrderInfoDetailContainer} from "./styles";

import { useLocation } from "react-router-dom";    

import { MapPin, Timer, CurrencyDollar } from "phosphor-react";
import { lightTheme } from "../../styles/theme/light";

import ConfirmedOrderImage from '../../assets/confirmed-order-image.svg';

export function ConfirmedOrder(){

    const { state } = useLocation();

    console.log(state);

    if (!state) return <></>;

    return (
        <Container>
            <LeftSide>
                <h1>Uhu! Pedido confirmado</h1>
                <h4>Agora é só aguardar que logo o café chegará até você</h4>
                <OrderInfoContainer>
                    <OrderInfoDetailContainer>
                        <ImageOrderInfoDetailContainer customcolor={lightTheme.purple}>
                            <MapPin color={lightTheme.backgroundDefault} size={20} weight='fill'/>
                        </ImageOrderInfoDetailContainer>
                        <TextOrderInfoDetailContainer>
                            <span>{`Entrega em Rua ${state.deliverData.street}, ${state.deliverData.number}`}</span>
                            <strong>{`${state.deliverData.district} - ${state.deliverData.city}, ${state.deliverData.uf}`}</strong>
                        </TextOrderInfoDetailContainer>
                    </OrderInfoDetailContainer>
                    <OrderInfoDetailContainer>
                        <ImageOrderInfoDetailContainer customcolor={lightTheme.yellow}>
                            <Timer color={lightTheme.backgroundDefault} size={20} weight='fill'/>
                        </ImageOrderInfoDetailContainer>
                        <TextOrderInfoDetailContainer>
                            <span>Previsão de Entrega</span>
                            <strong>20 min - 30 min</strong>
                        </TextOrderInfoDetailContainer>
                    </OrderInfoDetailContainer>
                    <OrderInfoDetailContainer>
                        <ImageOrderInfoDetailContainer customcolor={lightTheme.yellowDark}>
                            <CurrencyDollar color={lightTheme.backgroundDefault} size={20} weight='fill'/>
                        </ImageOrderInfoDetailContainer>
                        <TextOrderInfoDetailContainer>
                            <span>Pagamento na entrega</span>
                            <strong>{state.paymentOption}</strong>
                        </TextOrderInfoDetailContainer>    
                    </OrderInfoDetailContainer>
                </OrderInfoContainer>
            </LeftSide>
            <RightSide>
                <img src={ConfirmedOrderImage}/>
            </RightSide>
        </Container>    
    )
}