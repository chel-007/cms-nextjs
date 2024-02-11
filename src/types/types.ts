export type ErrorResponse = {
  code: string;
  message?: string;
  issues?: { message: string }[];
};

export type UserInfo = {
  country?: string;
  locality?: string;
  email?: string;
  birthday?: string;
  gender?: string;
  firstName?: string;
  givenName?: string;
  nickname?: string;
};
