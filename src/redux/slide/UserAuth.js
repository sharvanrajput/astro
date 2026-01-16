import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../baseApi";

/* ---------------- THUNKS ---------------- */

export const userLogin = createAsyncThunk(
  "user/login",
  async (data, thunkApi) => {
    try {
      const res = await api.post("/user/login", data); // ✅ await
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response?.data?.message || "Login failed"
      );
    }
  }
);

export const userRegister = createAsyncThunk(
  "user/register",
  async (data, thunkApi) => {
    try {
      const res = await api.post("/user/register", data); // ✅ await
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);

/* ---------------- SLICE ---------------- */

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const UserAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // LOGIN
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // REGISTER
      .addCase(userRegister.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, clearError } = UserAuthSlice.actions;
export default UserAuthSlice.reducer;
