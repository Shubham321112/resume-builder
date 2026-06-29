import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "./resumeSlice";

// Load data from Local Storage
const loadState = () => {
  try {
    const savedState = localStorage.getItem("resumeState");

    if (savedState === null) return undefined;

    return JSON.parse(savedState);
  } catch (error) {
    return undefined;
  }
};

// Save data to Local Storage
const saveState = (state) => {
  try {
    localStorage.setItem(
      "resumeState",
      JSON.stringify(state)
    );
  } catch (error) {}
};

const store = configureStore({
  reducer: {
    resume: resumeReducer,
  },

  preloadedState: loadState(),
});

// Save automatically whenever Redux state changes
store.subscribe(() => {
  saveState(store.getState());
});

export default store;