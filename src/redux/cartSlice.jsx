import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.product.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.product.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          img: newItem.img,
        });
      }
      state.totalPrice += newItem.price;
      state.totalQuantity++;
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.product.find((item) => item.id === id);

      if (existingItem) {
        state.totalPrice -= existingItem.totalPrice;
        state.totalQuantity -= existingItem.quantity;
        state.product = state.product.filter((item) => item.id !== id);
      }
    },
    increaseQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.product.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += existingItem.price;
        state.totalPrice += existingItem.price;
        state.totalQuantity++;
      }
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      const existingItem = state.product.find((item) => item.id === id);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
        state.totalPrice -= existingItem.price;
        state.totalQuantity--;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
