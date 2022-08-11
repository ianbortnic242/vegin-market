import {useState, createContext} from 'react';

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const isInCart = (id) => {
        return cart.some(product => product.id === id)
    }

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)){
            setCart([...cart, productToAdd])
        }
        else{
            console.log('Este producto ya se encuentra en el carrito!')
        }

    }
    console.log(cart)

    return (
        <CartContext.Provider value={{cart, addItem, isInCart}}>
            {children}
        </CartContext.Provider>
    )

}






