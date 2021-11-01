import { createSlice } from "@reduxjs/toolkit";

export interface User {
  userProfile?: {
    date_of_birth?: string|null,
    department?: string|null,
    email?: string|null,
    first_login?: number|null,
    first_name?: string|null,
    id?: number|null,
    last_name?: string|null,
    manager?: string|null,
    phone_nb?: string|null,
    rank?: number|null,
    user_type_id?: number|null
  }
}

const initialState: User = {
  userProfile: null
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action) {
        console.log('adding user object  ', action.payload)
        return action.payload;
    },
    deleteUser() {
        return initialState;
    },
    updateUserProfile(state, action){
        state.userProfile = action.payload.userProfile
        // NEVER CALL APIS here
        // asyncStorageManager.setItem("userProfile", action.payload.userProfile)
    },
  },
});



export const { addUser, deleteUser, updateUserProfile } = userSlice.actions
export default userSlice.reducer
