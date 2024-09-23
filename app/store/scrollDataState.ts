import { create } from "zustand";

type StateType = {
  scrollData: {
    current: number;
    previous: number;
    rounded: number;
  } | null;
  setScrollData: (newData: any) => void;
};

const useScrollDataState = create<StateType>((set) => ({
  scrollData: null,
  setScrollData: (newData: any) =>
    set((state) => ({
      scrollData: newData,
    })),
}));

export default useScrollDataState;