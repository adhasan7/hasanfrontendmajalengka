// src/services/api.ts
import axios from "axios";

const swapiApi = axios.create({
  baseURL: "https://swapi.dev/api/",
});

export const fetchPlanets = async (page: number): Promise<any> => {
  try {
    const response = await swapiApi.get(`planets/?page=${page}`);
    return response.data;
  } catch (error) {
    //throw new Error(`Error fetching planets: ${error.message}`);
  }
};
