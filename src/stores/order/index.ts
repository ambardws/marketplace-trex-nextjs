import { create } from "zustand";

type Store = {
  dataOrder: any[];
  setDataOrder: (data: any[]) => void;
};

export const useOrderStore = create<Store>()((set) => ({
  dataOrder: [],
  setDataOrder: (data) => {
    set({ dataOrder: data })
  } 
}));
