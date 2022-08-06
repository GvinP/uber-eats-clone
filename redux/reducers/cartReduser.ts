const InitialState = {
  selectedItems: {
    items: [] as ItemType[],
    restaurantName: "",
  },
};

export type ItemType = {
  title: string;
  price: string;
};

type InitialStateType = typeof InitialState;
export type CartActionsType = AddToCartACType;
type AddToCartACType = ReturnType<typeof addToCartAC>;

export const addToCartAC = (payload: {
  item: ItemType;
  restaurantName: string;
  checkboxValue: boolean;
}) => ({ type: "ADD_TO_CART", payload });

export const cartReducer = (
  state: InitialStateType = InitialState,
  action: CartActionsType
): InitialStateType => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (action.payload.checkboxValue) {
        return {
          ...state,
          selectedItems: {
            ...state.selectedItems,
            items: [...state.selectedItems.items, action.payload.item],
            restaurantName: action.payload.restaurantName,
          },
        };
      } else {
        return {
          ...state,
          selectedItems: {
            ...state.selectedItems,
            items: state.selectedItems.items.filter(
              (item) => item.title !== action.payload.item.title
            ),
          },
        };
      }

    default:
      return state;
  }
};
