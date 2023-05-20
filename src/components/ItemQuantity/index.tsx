import { Minus, Plus } from "phosphor-react"
import { Container, IncreaseDecreaseButton, Quantity } from "./styles"
import { lightTheme } from "../../styles/theme/light"

interface ItemQuantityProps {
    quantity: number;
    increaseQuantity: () => void;
    decreaseQuantity: () => void;
}

export function ItemQuantity({quantity, increaseQuantity, decreaseQuantity}: ItemQuantityProps){    
    return (
        <Container>
            <IncreaseDecreaseButton onClick={decreaseQuantity}>
                <Minus color={lightTheme.purple} size={16} weight='bold'/>
            </IncreaseDecreaseButton>          
            <Quantity>
                {quantity}
            </Quantity>
            <IncreaseDecreaseButton onClick={increaseQuantity}>
                <Plus color={lightTheme.purple} size={16} weight='bold'/>
            </IncreaseDecreaseButton>
        </Container>
    )
}