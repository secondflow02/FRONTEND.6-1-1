import { configureStore } from "@reduxjs/toolkit";
import { issueSlice } from "../store/IssueSlice";

const store = configureStore({
  reducer: {
    issues: issueSlice,
  },
});

export default store;
