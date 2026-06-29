import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "../redux/resumeSlice";

const loadState = () => {
  try {
    const data = localStorage.getItem("resumeData");

    if (data === null) return undefined;

    return JSON.parse(data);
  } catch (error) {
    return undefined;
  }
};

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    resume: resumeReducer,
  },
  preloadedState: preloadedState
    ? { resume: preloadedState }
    : undefined,
});

store.subscribe(() => {
  localStorage.setItem(
    "resumeData",
    JSON.stringify(store.getState().resume)
  );
});

export default store;