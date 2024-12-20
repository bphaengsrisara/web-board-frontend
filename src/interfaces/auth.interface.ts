export interface User {
  id: string;
  username: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthState {
  user: User | null;
}

export interface AuthActions {
  setUser: (user: User) => void;
  resetAuth: () => void;
}

export type AuthSlice = AuthState & AuthActions;

export interface UserFormData {
  username: string;
}
