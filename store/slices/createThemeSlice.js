const createThemeSlice = (set) => ({
  theme: "",
  setTheme: (newTheme) => set(() => ({ theme: newTheme })),
});

export default createThemeSlice;
