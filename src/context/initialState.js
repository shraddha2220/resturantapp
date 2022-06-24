import { fetchUser } from "../utils/fetchLocalStroageData";
import { fetchCart } from "../utils/fetchLocalStroageData";

const userInfo = fetchUser();
const cartInfo = fetchCart();

export const initialState = {
    user : userInfo,
    foodItems : null,
    cartShow: false,
    cartItems : cartInfo,

    
};