import { BadgeInfoContainer, Info, ImageContainer } from "./styles"
import { Coffee , Package, ShoppingCart, Timer } from 'phosphor-react';

interface BadgeInfoProps {
    iconName: 'coffee' | 'package' | 'shoppingcart' | 'timer';
    info: string;
}

export function BadgeInfo({iconName, info}: BadgeInfoProps){

    return (
        <BadgeInfoContainer>
            <ImageContainer imagecolor={iconName}>
                {iconName === 'coffee' && <Coffee size={20} color="#FFF" weight="fill"/>}
                {iconName === 'package' && <Package size={20} color="#FFF" weight="fill" />}
                {iconName === 'shoppingcart' && <ShoppingCart size={20} color="#FFF" weight="fill"/>}
                {iconName === 'timer' && <Timer size={20} color="#FFF" weight="fill"/>}
            </ImageContainer>
            <Info>
                {info}
            </Info>    
        </BadgeInfoContainer>
    )
}