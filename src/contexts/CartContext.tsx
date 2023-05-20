import { ReactNode, createContext, useReducer, useEffect, useState } from "react";

export interface ItemCart {
    id: string;
    description: string;
    unitaryValue: number;
    quantity: number;
    totalValue: number;
    imagePath: string;
}

interface CartContextType {
    cart: ItemCart[];
    totalCart: number;
    addNewItemToCart: (data: ItemCart) => void;
    increaseQuantityItemCart: (id: string) => void;
    decreaseQuantityItemCart: (id: string) => void;
    removeItemCart: (id: string) => void;
    clearCart: () => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
    children: ReactNode
  }

export function CartContextProvider({children}: CartContextProviderProps){

    const [cart, dispatch] = useReducer((state: ItemCart[], action: any) => {

        if (action.type === "ADD_ITEM_TO_CART") {
            return [...state, action.payload.data]
        }

        if (action.type === "INCREASE_ITEM_CART") {
            const updatedCart: ItemCart[] = state.map(item => {
                if (item.id === action.payload.id) {
                  return {
                    id: item.id,
                    description: item.description,
                    unitaryValue: item.unitaryValue,
                    quantity: item.quantity + 1,
                    totalValue: (item.unitaryValue) * (item.quantity + 1),
                    imagePath: item.imagePath
                  } as ItemCart;
                } else {
                  return item;
                }
            });
            return updatedCart;
        }

        if (action.type === "DECREASE_ITEM_CART") {
            const updatedCart: ItemCart[] = state.map(item => {
                if (item.id === action.payload.id) {
                  return {
                    id: item.id,
                    description: item.description,
                    unitaryValue: item.unitaryValue,
                    quantity: item.quantity - 1,
                    totalValue: (item.unitaryValue) * (item.quantity - 1),
                    imagePath: item.imagePath
                  } as ItemCart;
                } else {
                  return item;
                }
            });
            return updatedCart;
        }

        if (action.type === "REMOVE_ITEM_CART") {
            const updatedCart: ItemCart[] = state.filter(item => {
                return item.id !== action.payload.id
            });
            return updatedCart;
        }

        if (action.type === "CLEAR_CART") {
            return [];
        }

        return state;
    }, []);
    const [totalCart, setTotalCart] = useState<number>(0);


    useEffect(() => {
        const total = cart.reduce((accumulator, itemCart) => {
            return accumulator + itemCart.totalValue;
          }, 0);
        const totalWithDeliverTax = total + 3.5;  
        setTotalCart(totalWithDeliverTax);  
    },[cart])

    function addNewItemToCart(data: ItemCart){
        dispatch({
            type: 'ADD_ITEM_TO_CART',
            payload: {
                data
            }
        })
    }

    function increaseQuantityItemCart(id: string){
        dispatch({
            type: 'INCREASE_ITEM_CART',
            payload: {
                id
            }
        })
    }

    function decreaseQuantityItemCart(id: string){
        dispatch({
            type: 'DECREASE_ITEM_CART',
            payload: {
                id
            }
        })        
    }

    function removeItemCart(id: string){
        dispatch({
            type: 'REMOVE_ITEM_CART',
            payload: {
                id
            }
        })        
    }

    function clearCart(){
        dispatch({
            type: 'CLEAR_CART',
            payload: {}
        })         
    }

    return (
        <CartContext.Provider
            value={
                {cart, 
                 totalCart, 
                 addNewItemToCart, 
                 increaseQuantityItemCart, 
                 decreaseQuantityItemCart, 
                 removeItemCart,
                 clearCart}
            }
        >
            {children}
        </CartContext.Provider>
    )
}