import { cookies } from "next/headers";
import { Config } from "@/services/config";
import { Lessor } from "@/core/entities";

/**
 * Use these functions to interact with the backend server when working with server side rendered pages.
 */

/**
 * Get the current lessor from the backend server using the current session.
 * @returns {Promise<Lessor>} - The lessor data.
 */
export const getLessor = async (): Promise<Lessor> => {
  const session = cookies().get("session")?.value;
  try {
    const response = await fetch(Config.baseUrl + "/lessor", {
      method: "GET",
      credentials: "include",
      headers: {
        Cookie: `session=${session}`,
      },
    });
    return response.json();
  } catch (error) {
    console.error("Error getting lessor:", error);
    throw error;
  }
};
