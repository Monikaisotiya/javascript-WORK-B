import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart.name",
  initialState: "0",
  reducers: {
    addTo(state, action) {
      console.log(action.payload);
      return state + parseInt(action.payload);
    },
  },
});
export default cart.reducer;

// export the reduce 

export const { addTo } = cart.actions;
// Export the action creators

