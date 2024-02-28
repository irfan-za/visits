const initialState = {
  title: "",
  short_url: "",
};

const createMicrositeInfoSlice = (set) => ({
  micrositeInfo: initialState,
  setMicrositeInfo: (data) =>
    set((state) => ({ micrositeInfo: { ...state.micrositeInfo, ...data } })),
});

export default createMicrositeInfoSlice;
