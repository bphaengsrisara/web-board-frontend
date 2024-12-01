import { ApiErrorResponse, UserFormData } from "@/interfaces";
import { API_URL } from "@/config";

export const signIn = async (data: UserFormData): Promise<string> => {
  const response = await fetch(`${API_URL}/auth/sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(
      (responseData as ApiErrorResponse).message || "Failed to sign in",
    );
  }

  return responseData;
};
