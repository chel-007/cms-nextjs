import { useFetchUserInfoQuery } from "src/lib/hooks/use-fetch-user-info-query";

export function useAuthentication() {
  const { data, status } = useFetchUserInfoQuery();
  console.log(data)
  return {
    isLoading: status === "loading",
    isAuthenticated: status === "success",
    userId: data?.userId,
    user: data?.user,
  };
}
