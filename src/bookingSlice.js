import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    user: null,
    bookings: []
  },
  reducers: {

    addBooking: (state, action) => {

      const { name, email, mobile, roomType, checkin, checkout, guests, paymentMethod,
        amount} = action.payload;

      // store user details
      state.user = { name, email, mobile };

      // store booking
      state.bookings.push({
        id: Date.now(),
        roomType,
        checkin,
        checkout,
        guests,
        paymentMethod,
        amount
      });
    },
    cancelBooking: (state, action) => {
      state.bookings = state.bookings.filter(
        (b) => b.id !== action.payload
      );
    }

  }
});

export const { addBooking,cancelBooking } = bookingSlice.actions;
export default bookingSlice.reducer;