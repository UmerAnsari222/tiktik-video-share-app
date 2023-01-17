import axios from "axios";
import create from "zustand";

import { persist } from "zustand/middleware";

const BASE_URL = "http://localhost:3000";

const authStore = (set: any) => ({
  userProfile: null,
  allUsers: [],

  addUser: (user: any) => set({ userProfile: user }),
  removeUser: () => set({ userProfile: null }),
  fetchAllUsers: async () => {
    const response = await axios.get(`${BASE_URL}/api/users`);

    set({ allUsers: response.data });
  },
});

const useAuthStore = create(persist(authStore, { name: "auht" }));

export default useAuthStore;
