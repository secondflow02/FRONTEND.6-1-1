import { configureStore } from "@reduxjs/toolkit";
import { issueSlice } from "../store/IssueSlice";

const store = configureStore({
    reducer: {
        isListIssueAction: issueSlice,
    },
});

export default store;
