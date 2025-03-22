import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  user: string;
  email: string | null;
  isVerified: boolean;
  setVerificationStatus: (email: string | null, status: boolean) => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      email: null,
      isVerified: false,
      user: "Ariel",
      
      setVerificationStatus: (email: string | null, status: boolean) => {
        set({ email: email, isVerified: status });
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ user: state.user }),
    }
  )
);