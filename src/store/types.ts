import { store } from "./rootReducer";

export type PersonPhoneType = {
  values: {
    phone: string;
    mail: string;
  };
};

export type PersonalNameType = {
  values: {
    nickname: string;
    name: string;
    surname: string;
    male: string;
  };
};

export type Personal = {
  values: {
    phone: string;
    mail: string;
    nickname: string;
    name: string;
    surname: string;
    male: string;
  };
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
