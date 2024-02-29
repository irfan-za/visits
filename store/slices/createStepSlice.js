const createStepSlice = (set) => ({
  step: 1,
  increaseStep: () => set((state) => ({ ...state, step: state.step + 1 })),
  decreaseStep: () => set((state) => ({ ...state, step: state.step - 1 })),
  resetStep: () => set((state) => ({ ...state, step: 1 })),
});

export default createStepSlice;
