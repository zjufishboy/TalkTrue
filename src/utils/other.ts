import { useContext } from "react";
import { storeContext } from "@/store/rootStore";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useStore=()=>useContext(storeContext);