import { cookies } from "next/headers";
import { Config } from "@/services/config";
import { Auth } from "@/core/entities";

/**
 * Use these functions to interact with the backend server when working with server side rendered pages.
 * Reason: Axios will not set the cookies automatically when using SSR. Thats why we use fetch here.
 */

/**
 * Get the current session from the backend server.
 * @returns {Promise<Auth>} - The decoded session data.
 */
export const getSession = async (): Promise<Auth> => {
  const session = cookies().get("session")?.value;

  try {
    // Sending a GET request to the /auth endpoint
    const response = await fetch(Config.baseUrl + "/auth", {
      method: "GET",
      credentials: "include",
      headers: {
        Cookie: `session=${session}`,
      },
    });

    return response.json();
  } catch (error) {
    // Erro Handling
    console.error("Error getting session:", error);
    throw error;
  }
};
