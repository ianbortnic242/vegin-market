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
            const cartUpdated = cart.map(prod => {
                if(prod.id===productToAdd.id){
                    const productUpdated = {
                        ...prod,
                        quantity: productToAdd.quantity
                    }
                    return productUpdated
                }
                else{
                    return prod
                }
            })
            setCart(cartUpdated)
        }
        console.log(cart)

    }

    const removeItem = (id) => {
        const cartWithoutItem =  cart.filter(product => product.id !== id)
        setCart(cartWithoutItem)
    }

    const clearCart = () => {
        setCart([])
    }
    
    const getTotal = () => {
        let accu = 0
        cart.forEach(prod => {
            accu += prod.quantity * prod.price
        })

        return accu
    }

    const getQuantity = (id) => {
        let accu = 0
        cart.forEach(prod => {
            accu += prod.quantity
        })

        return accu
    }

    const getInitialById = (id) => {

        const product = cart.find(prod => prod.id === id)

        return product?.quantity
    }

    return (
        <CartContext.Provider value={{cart, addItem, isInCart, removeItem, clearCart, getQuantity, getInitialById, getTotal}}>
            {children}
        </CartContext.Provider>
    )

}






