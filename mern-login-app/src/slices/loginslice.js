import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedin: false,
  user: [],
};

// register post:

export const postRegister = createAsyncThunk(
  "user/postRegister",
  async (task, { rejectWithValue }) => {
    const response = await fetch("http://localhost:4000/api/register", {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    });
    if (response.ok) {
      const jsonres = await response.json();
      return jsonres;
    } else {
      return rejectWithValue({ error: "user is not register" });
    }
  }
);

const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    register_success: (state, action) => {
      state.isLoggedin = true;
    },
    register_failure: (state, action) => {
      state.isLoggedin = false;
    },
    login_success: (state, action) => {
      state.isLoggedin = true;
      state.user = action.payload;
    },
    login_fail: (state, action) => {
      state.isLoggedin = false;
      state.user = null;
    },
    logout: (state, action) => {
      state.isLoggedin = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postRegister.pending, (state) => {
      state.isLoggedin = false;
    });
    builder.addCase(postRegister.fulfilled, (state, action) => {
      state.user.push(action.payload);
    });
    builder.addCase(postRegister.rejected, (state, action) => {
      state.user = [];
    });
  },
});

export default loginSlice.reducer;
export const { register_success } = loginSlice.actions;
