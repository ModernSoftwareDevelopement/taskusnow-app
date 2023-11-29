import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_SERVER_URL,
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async () => {
    const response = await axiosInstance
      .get<T[]>(this.endpoint);
    return response.data;
  };

  get = async (id: number | string) => {
    const response = await axiosInstance
      .get<T>(this.endpoint + '/' + id);
    return response.data;
  };

  post = async (data: T, accessToken?: string) => {
    const response = await axiosInstance
      .post<T>(this.endpoint, data, {
        headers: {
          Authorization: `Bearer ${accessToken}` || undefined,
        },
      });
    return response.data;
  };
}

export default ApiClient;
