import { createContext, useState } from 'react';

export const BasketContext = createContext()

export const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useState(
        JSON.parse(localStorage.getItem('basket') ?? '{}') || null
    );
    const updateCart = (newCart) => {
        setBasket(newCart);
        localStorage.setItem('basket', JSON.stringify(newCart));
    }
    //basket methods
    const addItemToCart = (product) => {
        let newCart = structuredClone(basket);

        if(newCart?.products[product.id]) {
            newCart.products[product.id].amount+=1;
        } else {
            newCart.products[product.id] = {
                amount : 1,
                product : product
            };
        }
        updateCart(newCart);
    };

    const removeItemFromCart = (id) => {
        const newCart = structuredClone(basket);
        if(newCart.products[id].amount === 1) {
            delete newCart.products[id];
        } else {
            newCart.products[id].amount--;
        }
        updateCart(newCart);
    };

    const isInCart = (id) => basket.products[id];

    const amountOfItemsInCart = () => basket && Object.keys(basket?.products).reduce((acc, pid) => (acc += basket?.products[pid]?.amount), 0);

    const amountOfItems = (id) => basket?.products[id].amount;

    const totalCartPrice = () => basket ? Object.keys(basket.products).reduce((acc, pid) => {
        const productItem = basket.products[pid];
        const price = (productItem.product.promotionStatus) ?
            productItem.product.promotionPrice :
            productItem.product.price;
        acc += productItem.amount * price;
        return acc;
    },0) : 0;

    const resetCart = () => updateCart({uid: basket.uid, products: {}});

    const increaseItemAmountToCart = (id) => {
        const newCart = JSON.parse(localStorage.getItem('basket'));
        // const cartItem = cartItems.filter((cartItem) => cartItem.id === id.toString())
        newCart.products[id].amount++;
        updateCart(newCart);
    };

    const reduceItemAmountFromCart = (id) => {
        if(amountOfItems(id) > 1){
            const newCart = JSON.parse(localStorage.getItem('basket'));
            newCart.products[id].amount--;
            updateCart(newCart);
        }else{
            removeItemFromCart(id)
        }
    };
    // [{"id":"1","price":90,"amount":24}, {"id":"2","price":90,"amount":23}]
    return (
        <BasketContext.Provider
            value={{
                basket,
                setBasket,
                addItemToCart,
                removeItemFromCart,
                isInCart,
                amountOfItemsInCart,
                totalCartPrice,
                resetCart,
                increaseItemAmountToCart,
                reduceItemAmountFromCart
            }}
        >
            {children}
        </BasketContext.Provider>
    );
};