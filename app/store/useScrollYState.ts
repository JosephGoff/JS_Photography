import {create} from "zustand";

type StateType = {
    scrollY: number;
    setScrollY:(newY: number)=>void;
}

const useScrollYState = create<StateType>((set) => ({
    scrollY:0,
    setScrollY: (newY: number)=>set((state:StateType)=>({scrollY: newY})),
}))
export default useScrollYState;