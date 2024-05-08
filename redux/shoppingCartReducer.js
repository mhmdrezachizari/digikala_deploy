const { createSlice } = require("@reduxjs/toolkit");
const INITIAL_VALUES = { items: [], totalAmount: 0, totalCount: 0 }
const refreshstate = (state) => {
    state.totalAmount = 0
    state.totalCount = 0
    state.items.map(item => {
        state.totalCount += item.count
        state.totalAmount += item.priceWithDiscount !== 0 ? item.priceWithDiscount * item.count : item.price * item.count
    })
    return state
}
const shoppingCartReducerslice = createSlice({
    name: "shoppingcard",
    initialState: INITIAL_VALUES,
    reducers: {
        additem(state, action) {
            state.items.push({ ...action.payload, count: 1 })
            return refreshstate(state)
        }
        ,
        removeitem(state, action) {
            state = { items: state.items.filter(item => { return item.id !== action.payload }) }
            return refreshstate(state)
        },

        increaseitem(state, action) {
            state.items.map(item => {
                if (item.id === action.payload) {
                    item.count++;
                }
            })
            return refreshstate(state)
        },
        decreaseitem(state, action) {
            state.items.map(item => {
                if (item.id === action.payload) {
                    item.count=item.count-1;
                }
            })
            return refreshstate(state)
        }
    }

})
export const { additem, removeitem, increaseitem, decreaseitem } = shoppingCartReducerslice.actions
export default shoppingCartReducerslice.reducer;
