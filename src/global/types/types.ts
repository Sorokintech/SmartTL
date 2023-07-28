export interface IUser {
  id: number;
  name: string;
  email: string;
  username: string;
  city: string;
}
export interface IUserResponse extends Omit<IUser, "city"> {
  address: {
    city: string;
  };
}
export interface IModalProps extends IOpenClose {
  user: IUser;
}

export interface INewUser {
  name: string;
  email: string;
  username: string;
  city: string;
}
export interface IOpenClose {
  isOpen?: boolean;
  onClose: (data?: any) => void;
}
export interface ISuggestCity {
  name: "string";
  [propName: string]: unknown;
}
export interface IToastContext {
  success: (data: string) => void;
  error: (data: string) => void;
  danger: () => void;
}
export type TDebounce = (
  callback: (value: string) => Promise<any>,
  timeout: number
) => typeof callback;
