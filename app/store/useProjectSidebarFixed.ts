import { create } from "zustand";

type StateType = {
  projectSidebarFixed: boolean;
  hasPassedFirstTrigger: boolean;
  projectSidebarFirstTrigger: number;
  projectSidebarSecondTrigger: number;
  setProjectSidebarFixed: (newVal: boolean) => void;
  setHasPassedFirstTrigger: (newVal: boolean) => void;
  setProjectSidebarFirstTrigger: (newVal: number) => void;
  setProjectSidebarSecondTrigger: (newVal: number) => void;
};

const useProjectSidebarFixed = create<StateType>((set) => ({
  projectSidebarFixed: true,
  hasPassedFirstTrigger: false,
  projectSidebarFirstTrigger: 300, 
  projectSidebarSecondTrigger: 2000, 

  setProjectSidebarFixed: (newVal: boolean) =>
    set((state: StateType) => ({ projectSidebarFixed: newVal })),

  setHasPassedFirstTrigger: (newVal: boolean) =>
    set((state: StateType) => ({ hasPassedFirstTrigger: newVal })),

  setProjectSidebarFirstTrigger: (newVal: number) =>
    set((state: StateType) => ({ projectSidebarFirstTrigger: newVal })),

  setProjectSidebarSecondTrigger: (newVal: number) =>
    set((state: StateType) => ({ projectSidebarSecondTrigger: newVal })),
}));

export default useProjectSidebarFixed;