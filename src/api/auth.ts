import { ApiErrorResponse, User, UserFormData } from "@/interfaces";
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

export async function fetchUserProfile(): Promise<User | null> {
  try {
    const res = await fetch(`${API_URL}/users/profile`, {
      credentials: "include",
    });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
}
