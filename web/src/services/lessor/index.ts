import axios from "axios";
import { Config } from "@/services/config";
import { Lessor } from "@/core/entities";

const lessorApi = axios.create({
  baseURL: Config.baseUrl + "/lessor",
  withCredentials: true,
});

/**
 * Use these functions to interact with the backend server when working with client side rendered pages.
 * Axios will set the cookies automatically when using CSR.
 */

/**
 * Creates a profile
 * @returns {Promise<Lessor>} - The response data that is the lessor profile.
 */
export const createProfile = async (): Promise<Lessor> => {
  try {
    const response = await lessorApi.post<Lessor>("");
    return response.data;
  } catch (error) {
    console.error("Error creating lessor:", error);
    throw error;
  }
};
