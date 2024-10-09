import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [],
  }),
  getters: {
    totalItems(state) {
      return state.cartItems.reduce((sum, item) => sum + item.quantity, 0);
    },
    totalPrice(state) {
      return state.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }
  },
  actions: {
    clearCart() {
      this.cartItems = [];
    },
    addItem(item) {
      this.cartItems.push(item);
    },
    removeItem(itemId) {
      this.cartItems = this.cartItems.filter(item => item.id !== itemId);
    }
  }
});

