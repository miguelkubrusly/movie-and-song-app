declare global {
  type Movie = string;
  type Song = string;
  type AppDispatch = { payload: any; type: string };
  type RootState = ReturnType<typeof store.getState>;
}

export {};
