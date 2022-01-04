import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getJWT } from '../../Utils/jwt';
// React.useEffect(() => {
//     // Fetch the token from storage then navigate to our appropriate place
//     const bootstrapAsync = async () => {
//       let userToken;

//       try {
//         userToken = await SecureStore.getItemAsync('userToken');
//       } catch (e) {
//         // Restoring token failed
//       }

//       // After restoring token, we may need to validate it in production apps

//       // This will switch to the App screen or Auth screen and this loading
//       // screen will be unmounted and thrown away.
//       dispatch({ type: 'RESTORE_TOKEN', token: userToken });
//     };

//     bootstrapAsync();
//   }, []);

const SECRET_KEY = 'your-256-bit-secret';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoading: true,
    isSignout: false,
    userToken: null,
    authError: '',
  },
  reducers: {}, // standard reducer logic, with auto-generated action types per reducer
  extraReducers: builder => {
    builder.addCase(signIn.pending, (state, _) => {
      state.isLoading = true;
    });
    builder.addCase(signIn.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.authError = '';
      state.userToken = payload;
    });
    builder.addCase(signIn.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.authError = payload;
    });
  },
});

export const signIn = createAsyncThunk(
  'auth/signIn',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios({ email, password });
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

const axios = ({ email, password }) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (validateEmail(email)) {
        if (validatePassword(password)) {
          const user = extractUserFromEmail(email);
          const token = getJWT(user, SECRET_KEY);
          resolve(token);
        } else {
          const errorMessage = 'Invalid password';
          reject(errorMessage);
        }
      } else {
        const errorMessage = 'Invalid email';
        reject(errorMessage);
      }
    }, 5000);
  });

const validateEmail = (email: string) => {
  if (email.includes('@itechart-group.com')) {
    return true;
  }
  return false;
};

const validatePassword = (password: string) => {
  if (password === 'admin') {
    return true;
  }
  return false;
};

const extractUserFromEmail = email => {
  return email.replace('@itechart-group.com', '').split('.').join(' ');
};

export default authSlice.reducer;
