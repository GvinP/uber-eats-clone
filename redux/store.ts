import {Action, AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
// import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import { CartActionsType, cartReducer } from "./reducers/cartReduser";

const rootReducer = combineReducers({
    cart: cartReducer,
});

const store = createStore(rootReducer); // , applyMiddleware(thunkMiddleware)
export type RootState = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// export const useAppDispatch = () => useDispatch<AppDispatch>();

// export type AppDispatch = ThunkDispatch<RootState, unknown, StoreActions>
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>
type StoreActions = CartActionsType

export default store;