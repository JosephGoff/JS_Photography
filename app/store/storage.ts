import {create} from "zustand";

type StateType = {
    routeTracker:string;
    setRouteTracker:(newRoute: string)=>void;
}

const  useStore = create<StateType>((set) => ({
    routeTracker:"/",
    setRouteTracker: (newRoute: string)=>set((state:StateType)=>({routeTracker: newRoute})),
}))
export default useStore;