import { Store, configureStore, createSlice } from '@reduxjs/toolkit';
import counterReducer from './Slices/counterSlice';
import { JakisKomponent } from '../App/Exercises/ReactExercises/Redux/JakisKomponent';
// Przykładowa konfiguracja Store z wartoscią do wyswietlenia

// const initialTestState = {
//   value: 'store is working',
// };

// export const storeTest = createSlice({
//   name: 'store-test',
//   initialState: initialTestState,
//   reducers: {},
// });

// export const store = configureStore({
//   reducer: {
//     storeTest: storeTest.reducer,
//   },
// });

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
