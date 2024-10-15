import { TypedActionCreator } from "@reduxjs/toolkit/dist/mapBuilders";
import { createAction } from "@reduxjs/toolkit";

export const reset: TypedActionCreator<string> = createAction("app/action");
