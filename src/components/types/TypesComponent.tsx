export type RootState = {
  auth: {
    user: string | null;
    email: string | null;
  };
};

export type signupState = {
  signupModalOpen: boolean
};
