import axios from "axios";

import { Config } from "@/services/config";
import { SuccessResponse } from "@/core/entities";

const authApi = axios.create({
  baseURL: Config.baseUrl + "/auth",
  withCredentials: true,
});

/**
 * Use these functions to interact with the backend server when working with client side rendered pages.
 * Axios will set the cookies automatically when using CSR.
 */

/**
 * Creates a session by sending the authentication token to the backend server.
 * @param {string} token - The authentication token.
 * @returns {Promise<SuccessResponse>} - The response data that just states that the session was created successfully.
 */
export const createSession = async (
  token: string
): Promise<SuccessResponse> => {
  try {
    // Sending a POST request to the /auth endpoint with the token in the Authorization header
    const response = await authApi.post<SuccessResponse>(
      "",
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return response.data;
  } catch (error) {
    console.error("Error creating session:", error);
    throw error;
  }
};

export const removeSession = async (): Promise<SuccessResponse> => {
  try {
    const response = await authApi.delete<SuccessResponse>("");
    return response.data;
  } catch (error) {
    console.error("Error removing session:", error);
    throw error;
  }
};
