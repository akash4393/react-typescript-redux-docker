import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { User } from 'types/User';
import type { RootState } from '../store';

export enum API_STATUS {
  idle = 'idle',
  pending = 'pending',
  succeeded = 'succeeded',
  failed = 'failed',
}

interface UserState {
  user?: User;
  status?: API_STATUS;
  error?: unknown;
}

const initialState: UserState = {
  user: undefined,
  status: API_STATUS.idle,
};

const timeout = (ms: number): Promise<void> => {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
};

const asyncLoginAPIMockMethod = async (): Promise<User> => {
  const user: User = {
    userId: 1,
    email: 'test@example.com',
    username: 'testUser1',
  };
  await timeout(1000);
  return user;
};

export const login = createAsyncThunk('user/login', async () => {
  try {
    const user: User = await asyncLoginAPIMockMethod();
    return user;
  } catch (error) {
    throw new Error(error);
  }
});

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.status = API_STATUS.pending;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = API_STATUS.succeeded;
      state.user = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.status = API_STATUS.failed;
      state.error = action.payload;
    });
  },
});

export const { logout } = userSlice.actions;

export const selectUserStatus = (state: RootState): API_STATUS | undefined => state.user.status;
export const selectUser = (state: RootState): User | undefined => state.user.user;
export const selectError = (state: RootState): unknown => state.user.error;

export default userSlice.reducer;
