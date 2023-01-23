import axios from "axios";
import { URL_Cadastro } from "../constants/urls.js";

export const cadastroAPI = async (cadastroData) => {
  const res = {
    success: false,
    error: undefined
  };

  try {
    await axios.post(`${URL_Cadastro}`, cadastroData);

    res.success = true;
    return res;

  } catch (error) {
    res.error = error.response.data;
    return res;
  }
};