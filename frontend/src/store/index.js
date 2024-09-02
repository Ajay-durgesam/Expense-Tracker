import { create } from "zustand";
const user = {
  name: "ajaydurgesam",
  email: "ajaydurgesam@gmail.com",
  accounts: ["Cash"],
  country: {
    name: "India",
    code: "IN",
    flag: "",
  },
};

const useStore = create((set) => ({
  theme: localStorage.getItem("theme") ?? "light",
  user: JSON.parse(localStorage.getItem("user")) ?? null,

  setTheme: (value) => set({ theme: value }),
  setCredentails: (user) => set({ user }),
  signOut: () => set({ user: null }),
}));

export default useStore;
