import { useAuthentication } from "src/lib/hooks/use-authentication";

export const useLocalContent = () => {
  const { isAuthenticated, user } = useAuthentication();

  return {
    country: isAuthenticated && user?.country,
    email: isAuthenticated && user?.email,
    locality: isAuthenticated && user?.locality,
    birthday: isAuthenticated && user?.birthday,
    gender: isAuthenticated && user?.gender,
  };
};
