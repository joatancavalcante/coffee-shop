import Logo from '../../assets/Logo.svg';
import { LogoImageContainer, 
         CartButton, 
         Container, 
         LocationButton, 
         LogoImage, 
         ButtonsContainer, 
         CartBadge} from './styles';
import { MapPin, ShoppingCart } from "phosphor-react";    
import { lightTheme } from '../../styles/theme/light';   
import { useNavigate } from 'react-router-dom';  
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export function Header(){    

    const {cart} = useContext(CartContext);

    const navigate = useNavigate();

    function handleGoToCompleteOrder(){
        if (cart.length > 0) {
            navigate("complete-order");
        }
    }

    function handleGoToHome(){
        navigate("/");
    }

    return (
        <Container>
            <LogoImageContainer>
                <LogoImage onClick={handleGoToHome} src={Logo}  />
            </LogoImageContainer>
            <ButtonsContainer>
                <LocationButton>
                    <MapPin color={lightTheme.purple} size={20} weight='fill'/>
                    Porto Alegre, RS
                </LocationButton>                
                    <CartButton onClick={handleGoToCompleteOrder} disabled={cart.length == 0}>
                        <ShoppingCart color={lightTheme.yellowDark} size={20} weight='fill'/>
                        <CartBadge>
                            {cart.length}
                        </CartBadge>
                    </CartButton>                
            </ButtonsContainer>
        </Container>
    )
}