export type ErrorResponse = {
  code: string;
  message?: string;
  issues?: { message: string }[];
};

export type UserInfo = {
  country?: string;
  city?: string;
  address?: string;
  email?: string;
  birthdate?: string;
  gender?: string;
  givenName?: string;
  nickname?: string;
  avatar?: string;
  phone?: number;
  postalCode?: number;
};
