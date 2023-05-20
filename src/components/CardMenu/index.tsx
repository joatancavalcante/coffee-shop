import { ItemQuantity } from "../ItemQuantity";
import { Container, Main, Footer, FooterLeftSide, FooterRightSide, CartButton, Coin, ItemValue } from "./styles";
import { ShoppingCart } from "phosphor-react";
import { lightTheme } from "../../styles/theme/light";
import { useContext, useState } from "react";
import { CartContext, ItemCart } from "../../contexts/CartContext";
import { v4 as uuid } from 'uuid'

interface CardMenuProps {
    id: string;
    imageCard: string;
    badgeInfo: string;
    description: string;
    info: string;
    value: number;
}

export function CardMenu({id, imageCard, badgeInfo, description, info, value}: CardMenuProps){

    const [quantityItem, setQuantityItem] = useState<number>(1);

    function increaseQuantityItem(){
        setQuantityItem(state => state + 1);
    }

    function decreaseQuantityItem(){
        setQuantityItem(state => state - 1);
    }

    const {addNewItemToCart} = useContext(CartContext);

    function handleAddItemToCart(){

        const total = quantityItem * value;

        const item = {
            id: id,
            description: description,
            unitaryValue: value,
            quantity: quantityItem,
            totalValue: total,
            imagePath: imageCard
        } as ItemCart;

        addNewItemToCart(item);
    }

    return (
        <Container>
            <Main>
                <img src={imageCard} />
                <span>{badgeInfo}</span>
                <strong>{description}</strong>
                <label>{info}</label>
            </Main>
            <Footer>
                <FooterLeftSide>
                    <Coin>R$</Coin>
                    <ItemValue>{value.toFixed(2).toString().replace(".", ",")}</ItemValue>
                </FooterLeftSide>
                <FooterRightSide>
                    <ItemQuantity quantity={quantityItem} increaseQuantity={increaseQuantityItem} decreaseQuantity={decreaseQuantityItem} />
                    <CartButton onClick={handleAddItemToCart}>
                        <ShoppingCart color={lightTheme.backgroundDefault} size={20} weight='fill'/>
                    </CartButton>
                </FooterRightSide>
            </Footer>              
        </Container>    
    )
}