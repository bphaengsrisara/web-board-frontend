import { ApiErrorResponse, User, UserFormData } from "@/interfaces";
import { API_URL } from "@/config";

export const signIn = async (data: UserFormData): Promise<string> => {
  const response = await fetch(`${API_URL}/auth/sign-in`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
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

export async function logout(): Promise<boolean> {
  try {
    const res = await fetch(`${API_URL}/auth/sign-out`, {
      method: "POST",
      credentials: "include",
    });
    return res.ok;
  } catch (error) {
    console.error("Error logging out:", error);
    return false;
  }
}
