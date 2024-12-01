import { User, UserFormData } from "@/interfaces";
import { API_URL } from "./config";

export const signIn = async (data: UserFormData): Promise<User> => {
  const response = await fetch(`${API_URL}/auth/sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to sign in");
  }

  return response.json();
};
