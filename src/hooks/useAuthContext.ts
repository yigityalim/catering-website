import React from "react";
import {Context} from "../context/AdminContext.tsx";

export const useAuthContext = () => React.useContext(Context);