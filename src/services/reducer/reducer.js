import { Increment, Decrement } from "../constant";

const initialState = 0;

export const incDecreducer = (state = initialState, action, payLoad) => {
    switch (action.type) {
        case Increment:
            return state + 5
            break;
        case Decrement:
            return state - 5
            break
        default:
            return state;
    }
}