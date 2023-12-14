import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  issueList: [],
  detailIssue: null,
};

const issueSlice = createSlice({
  name: "issues",
  initialState,
  reducers: {
    getAllIssue: (state, action) => {
      state.issueList = action.payload.issueList;
    },
    getDetailIssue: (state, action) => {
      state.detailIssue = action.payload.detailIssue;
    },
  },
});

// export const IssueAction = issueSlice.action;
// export default issueSlice.reducer;

export const { getAllIssue, getDetailIssue } = issueSlice.actions;
export default issueSlice.reducer;
