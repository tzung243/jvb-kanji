declare type User = {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
};

declare type UserResponse = {
  user: User;
  jwt: string;
};
