import React from "react";
import {Context} from "../context/SiteContext.tsx";

export const useSiteContext = () => React.useContext(Context);