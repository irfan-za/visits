import { create } from "zustand";
import {
  createMicrositeInfoSlice,
  createStepSlice,
  createThemeSlice,
  createTypeSlice,
} from "./slices";

const useStore = create()((...a) => ({
  ...createMicrositeInfoSlice(...a),
  ...createStepSlice(...a),
  ...createThemeSlice(...a),
  ...createTypeSlice(...a),
}));

export default useStore;
