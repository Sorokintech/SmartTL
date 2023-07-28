import { createContext } from "react";
import { IToastContext } from "../global/types/types";

export const ToastContext = createContext<IToastContext>({} as IToastContext);
