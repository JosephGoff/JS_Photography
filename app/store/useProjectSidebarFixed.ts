import { create } from "zustand";

type StateType = {
  projectSidebarFixed: boolean;
  projectSidebarFirstTrigger: number;
  projectSidebarSecondTrigger: number;
  setProjectSidebarFixed: (newVal: boolean) => void;
  setProjectSidebarFirstTrigger: (newVal: number) => void;
  setProjectSidebarSecondTrigger: (newVal: number) => void;
};

const useProjectSidebarFixed = create<StateType>((set) => ({
  projectSidebarFixed: false,
  projectSidebarFirstTrigger: 300, 
  projectSidebarSecondTrigger: 2000, 

  setProjectSidebarFixed: (newVal: boolean) =>
    set((state: StateType) => ({ projectSidebarFixed: newVal })),

  setProjectSidebarFirstTrigger: (newVal: number) =>
    set((state: StateType) => ({ projectSidebarFirstTrigger: newVal })),

  setProjectSidebarSecondTrigger: (newVal: number) =>
    set((state: StateType) => ({ projectSidebarSecondTrigger: newVal })),
}));

export default useProjectSidebarFixed;