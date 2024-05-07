import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    CartTotal: 0,
    cartquantity: 0
}

const CartSlise = createSlice({
    name: "CartSlise",
    initialState,
    reducers: {
        AddToCart: (state, action) => {
            const itemProduct = state.cart.findIndex((item) => item.id == action.payload.id)
            if (itemProduct >= 0) {
                state.cart[itemProduct].cartquantity += 1
            } else {
                const tempProducts = {...action.payload  , cartquantity: 1}
                state.cart.push(tempProducts)
            }
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        MiunsToCart: (state, action) => {
            const itemProduct = state.cart.findIndex((item) => item.id == action.payload.id)
            if (itemProduct >= 0) {
                state.cart[itemProduct].cartquantity -= 1
                if (state.cart[itemProduct].cartquantity === 0) {
                    state.cart.splice(itemProduct, 1)
                }
            }
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        RemoveFromCart: (state, action) => {
            const DeleteProduct = state.cart.filter((item) => item.id != action.payload.id)
            state.cart = DeleteProduct
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        ClearCards:(state, action) => {
            state.cart = []
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        GetTotalquantity: (state, action) => {
            const { total, quantity } = state.cart.reduce(
                (cardTotal, cardItem) => {
                    const { price, cartquantity } = cardItem;
                    const itemTotal = price * cartquantity;
                    cardTotal.total += itemTotal;
                    cardTotal.quantity += cartquantity;
                    return cardTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );
            state.CartTotal = total;
            state.cartquantity = quantity;
        }
    }
})
export const {AddToCart , MiunsToCart , RemoveFromCart , ClearCards , GetTotalquantity} = CartSlise.actions
export default CartSlise.reducer ;