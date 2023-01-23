import axios from "axios";
import { URL_Login } from "../constants/urls.js";

export const loginAPI = async (loginDados) => {
  try {
    const { data: userInfo } = await axios.post(`${URL_Login}`, loginDados);

    return { success: true, error: undefined, userInfo };

  } catch (error) {
    return { success: false, error: error.response.data, userInfo: undefined };
  }
};