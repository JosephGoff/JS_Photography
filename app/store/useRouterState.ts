import {create} from "zustand";

type StateType = {
    routeTracker:string;
    setRouteTracker:(newRoute: string)=>void;
}

const useRouterState = create<StateType>((set) => ({
    routeTracker:"/",
    setRouteTracker: (newRoute: string)=>set((state:StateType)=>({routeTracker: newRoute})),
}))
export default useRouterState;