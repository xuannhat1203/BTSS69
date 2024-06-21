// const cart = [
//   {
//     id: 1,
//     name: "Cake",
//     image:
//       "https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg",
//     quantity: 1,
//     stock: 20,
//     price: 20000,
//     title:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
//   },
//   {
//     id: 2,
//     name: "Hamberger",
//     image:
//       "https://i0.wp.com/thenutritionadventure.com/wp-content/uploads/2017/07/PourHouseAmericanBurger.jpg?resize=5236%2C3490",
//     quantity: 1,
//     stock: 20,
//     price: 10000,
//     title:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
//   },
//   {
//     id: 3,
//     name: "Pizza",
//     image:
//       "https://media1.popsugar-assets.com/files/thumbor/oYivacUQxsjybVn80tgpJo2bahw/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2015/06/10/017/n/1922398/bc378e5c_shutterstock_93720934.jpg",
//     quantity: 1,
//     stock: 20,
//     price: 10000,
//     title:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
//   },
//   {
//     id: 4,
//     name: "Bread",
//     image:
//       "https://quietly-image-uploads.s3.amazonaws.com/item_56603_1280px_dca7c236c55f4db6a8eafab1225ae9d3.jpeg",
//     quantity: 1,
//     stock: 20,
//     price: 10000,
//     title:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
//   },
// ];
let cart = JSON.parse(localStorage.getItem("listItem") || "[]");
const reducerState = (state = cart, action: any) => {
  switch (action.type) {
    case "ADDTOCART":
      return state;
    default:
      return state;
  }
};

export default reducerState;
