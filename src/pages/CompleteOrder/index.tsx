import { useState, useEffect } from "react";
import { FormContainer, 
    AdreesInfoContainer, 
    Title, 
    LeftContainer, 
    PaymentInfoContainer, 
    RightContainer,
    AdressHeader,
    InfoHeader, 
    PaymentOptionsContainer,
    OrderSummaryContainer,
    ItemOrderSummary,
    ImageAndDescriptionAndButtonsArea,
    DescriptionAndButtonsArea,
    ButtonsArea,
    RemoveButton,
    ValueArea,
    ItemSeparator,
    TotalizerArea,
    ItemsTotalizerArea,
    OrderTotalizerArea,
    OrderConfirmButton} from "./styles";
import { MapPinLine, CurrencyDollar, CreditCard, Money, Trash } from 'phosphor-react'; 
import { lightTheme } from "../../styles/theme/light";   
import { PaymentOptionType } from "../../components/PaymentOptionType";
import { ItemQuantity } from "../../components/ItemQuantity";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { useNavigate } from 'react-router-dom';  
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { useForm, FormProvider } from "react-hook-form";
import { InputDeliverAdress } from "./InputDeliverAdress";

enum PaymentMethods {
    credit = "credit",
    debit = "debit",
    pix = "pix",
}

const completeOrderFormValidationSchema = zod.object({
    cep: zod.string().min(8, "Informe o cep"),    
    street: zod.string().min(1, "Informe a rua"),
    number: zod.string().min(1, "Informe o número"),
    complement: zod.string(),
    district: zod.string().min(1, "Informe o bairro"),
    city: zod.string().min(1, "Informe a cidade"),
    uf: zod.string().min(2, "Informe a UF"),
    
    /*
    paymentMethod: zod.nativeEnum(PaymentMethods, {
      errorMap: () => {
        return { message: "Informe o método de pagamento" };
      },
    }),
    */
  });

type completeOrderData = zod.infer<typeof completeOrderFormValidationSchema>;

export function CompleteOrder(){

    const completeOrderForm = useForm<completeOrderData>({
        resolver: zodResolver(completeOrderFormValidationSchema),
        defaultValues: {
            
        }
    });    
    const { handleSubmit } = completeOrderForm;

    const {cart, 
        totalCart, 
        increaseQuantityItemCart, 
        decreaseQuantityItemCart, 
        removeItemCart,
        clearCart} = useContext(CartContext);

    const [activePaymentOption, setActivePaymentOption] = useState<PaymentMethods>(PaymentMethods.credit);

    const navigate = useNavigate();

    useEffect(() => {
        //when cart is empty, return to home page
        if (cart.length == 0) {
            navigate(-1);
        }
    }, [cart]);

    const totalWithoutDeliverTax = totalCart - 3.5;

    function handleSelectPaymentOption(paymentType: PaymentMethods){
        event?.preventDefault(); //avoiding form submiting
        setActivePaymentOption(paymentType);
    }

    function handleIncreaseQuantityItem(id: string){
        increaseQuantityItemCart(id);
    }

    function handleDecreaseQuantityItem(id: string){
        decreaseQuantityItemCart(id);
    }

    function handleRemoveItem(id: string){
        removeItemCart(id);
    }

    function handleConfirmOrder(data: completeOrderData){
        console.log("submited form => ", data)

        const order = {
            cart,
            deliverData: data,
            paymentOption: activePaymentOption
        }

        navigate("/confirmed-order", {
            state: order,
          });
        clearCart();
    }

    return (
        
            <FormContainer onSubmit={handleSubmit(handleConfirmOrder)}>
                <FormProvider {...completeOrderForm}>
                    <LeftContainer>
                        <Title>Complete seu pedido</Title>
                        <AdreesInfoContainer>
                            <AdressHeader>
                                <MapPinLine size={22} color={lightTheme.yellowDark} />
                                <InfoHeader>
                                    <span>Endereço de entrega</span>
                                    <p>Informe o endereço onde deseja receber seu pedido</p>
                                </InfoHeader>
                            </AdressHeader>
                            <InputDeliverAdress />
                        </AdreesInfoContainer>
                        <PaymentInfoContainer>
                            <AdressHeader>
                                <CurrencyDollar size={22} color={lightTheme.purple} />
                                <InfoHeader>
                                    <span>Pagamento</span>
                                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar.</p>
                                </InfoHeader>
                            </AdressHeader>
                            <PaymentOptionsContainer>
                                <PaymentOptionType selected={activePaymentOption === PaymentMethods.credit} title="Cartão de Crédito" onClick={() => handleSelectPaymentOption(PaymentMethods.credit)}>
                                    <CreditCard size={18} color={lightTheme.purple} />
                                </PaymentOptionType>
                                <PaymentOptionType selected={activePaymentOption === PaymentMethods.debit} title="Cartão de débito" onClick={() => handleSelectPaymentOption(PaymentMethods.debit)}>
                                    <CreditCard size={18} color={lightTheme.purple} />
                                </PaymentOptionType>    
                                <PaymentOptionType selected={activePaymentOption === PaymentMethods.pix} title="Pix / Dinheiro" onClick={() => handleSelectPaymentOption(PaymentMethods.pix)}>
                                    <Money size={18} color={lightTheme.purple} />
                                </PaymentOptionType>    
                            </PaymentOptionsContainer>                    
                        </PaymentInfoContainer>
                        
                    </LeftContainer>
                    <RightContainer>
                        <Title>Cafés selecionados</Title>
                        <OrderSummaryContainer>
                            {
                                cart.map((item) => (
                                    <ItemOrderSummary key={item.id}>
                                        <ImageAndDescriptionAndButtonsArea>
                                            <img src={item.imagePath} />
                                            <DescriptionAndButtonsArea>
                                                <span>{item.description}</span>
                                                <ButtonsArea>
                                                    <ItemQuantity quantity={item.quantity} increaseQuantity={() => handleIncreaseQuantityItem(item.id)} decreaseQuantity={() => handleDecreaseQuantityItem(item.id)} />
                                                    <RemoveButton onClick={() => handleRemoveItem(item.id)}>
                                                        <Trash size={22} color={lightTheme.purple} />
                                                        <span>
                                                            Remover
                                                        </span>
                                                    </RemoveButton>    
                                                </ButtonsArea>                            
                                            </DescriptionAndButtonsArea>
                                        </ImageAndDescriptionAndButtonsArea>
                                        <ValueArea>
                                            <span>
                                                {item.totalValue.toFixed(2).replace(".", ",")}
                                            </span>
                                        </ValueArea>
                                    </ItemOrderSummary>  
                                ))
                            }
                            <ItemSeparator />  
                            <TotalizerArea>
                                <ItemsTotalizerArea>
                                    <p>
                                        Total de itens
                                    </p>
                                    <span>
                                        {totalWithoutDeliverTax.toFixed(2).replace(".", ",")}
                                    </span>
                                </ItemsTotalizerArea>
                                <ItemsTotalizerArea>
                                    <p>
                                        Entrega
                                    </p>
                                    <span>
                                        R$ 3,50
                                    </span>
                                </ItemsTotalizerArea>
                                <OrderTotalizerArea>
                                    <strong>
                                        Total
                                    </strong>
                                    <strong>
                                        {totalCart.toFixed(2).replace(".", ",")}
                                    </strong>
                                </OrderTotalizerArea>
                            </TotalizerArea>       
                            <OrderConfirmButton type="submit">
                                <span>
                                    Confirmar Pedido
                                </span>
                            </OrderConfirmButton>              
                        </OrderSummaryContainer>
                    </RightContainer>
                </FormProvider>        
            </FormContainer>
    )
}