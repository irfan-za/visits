const createStepSlice = (set) => ({
  step: 1,
  increaseStep: (step) => set((state) => ({ ...state, step: step + 1 })),
  decreaseStep: (step) => set((state) => ({ ...state, step: step - 1 })),
});

export default createStepSlice;
