import { signal, computed, WritableSignal } from '@angular/core';

interface AuthState {
  token: string | null;
  isLoggedIn: boolean;
}

const _authState: WritableSignal<AuthState> = signal({
  token: null,
  isLoggedIn: false,
});

export const isLoggedIn = computed(() => _authState().isLoggedIn);

export const setToken = (token: string) => {
  _authState.update(state => ({
    ...state,
    token,
    isLoggedIn: !!token,
  }));
};

export const clearAuth = () => {
  _authState.set({ token: null, isLoggedIn: false });
};
