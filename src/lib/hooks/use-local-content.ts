import { useAuthentication } from "src/lib/hooks/use-authentication";

export const useLocalContent = () => {
  const { isAuthenticated, user } = useAuthentication();

  return {
    country: isAuthenticated && user?.country,
    email: isAuthenticated && user?.email,
    city: isAuthenticated && user?.city,
    birthdate: isAuthenticated && user?.birthdate,
    gender: isAuthenticated && user?.gender,
  };
};
