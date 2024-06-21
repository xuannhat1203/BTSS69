const cartItem = JSON.parse(localStorage.getItem("cart") || "[]");
const reducerItem = (state = cartItem, action: any) => {
  switch (action.type) {
    case "ADDTOCART":
      const item = action.payload.item;
      const quantity = action.payload.quantity;
      const existingItem = state.find(
        (cartItem: any) => cartItem.id === item.id
      );
      if (existingItem) {
        return state.map((cartItem: any) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      } else {
        return [...state, { ...item, quantity: quantity }];
      }

    case "ChangeQuantity":
      return state.map((item: any) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

    case "DELETE":
      return state.filter((item: any) => item.id !== action.payload.id);

    default:
      return state;
  }
};

export default reducerItem;
