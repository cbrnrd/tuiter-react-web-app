import { createSlice } from "@reduxjs/toolkit";
import ExploreComponent from "../explore";

const contextSlice = createSlice({
  name: "context",
  initialState: ExploreComponent
});

export default contextSlice.reducer;
