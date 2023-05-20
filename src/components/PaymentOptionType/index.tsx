import { Container } from "./styles";

interface PaymentOptionTypeProps extends React.HTMLProps<HTMLButtonElement> {
    title: string;
    selected?: boolean;
}

export function PaymentOptionType({selected=false, title, onClick, children}: PaymentOptionTypeProps){
    return (
        <Container onClick={onClick} selected={selected}>
            {children}
            <span>
                {title}
            </span>
        </Container>
    )
}