import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/', // url backend django
});

export default api;

const API_BASE_URL = "http://localhost:8000/api";

export const callGPT4 = async (prompt: string): Promise<string> => {
    try {
      const response = await axios.post(`${API_BASE_URL}/gpt4/`, { prompt });
      return response.data.response; // Le texte renvoyé par GPT-4
    } catch (error: any) {
      console.error("Erreur lors de l'appel à GPT-4 :", error.response?.data || error.message);
      throw new Error(error.response?.data.error || "Erreur inconnue");
    }
  };