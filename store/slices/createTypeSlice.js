const createTypeSlice = (set) => ({
  type: "",
  setType: (newType) => set(() => ({ type: newType })),
});

export default createTypeSlice;
