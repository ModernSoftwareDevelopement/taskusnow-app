import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_SERVER_URL,
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInstance
      .get<T[]>(this.endpoint)
      .then(response => response.data);
  }

  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then(response => response.data);
  }

  post = (data: T, accessToken?: string) => {
    return axiosInstance
      .post<T>(this.endpoint, data, {
        headers: {
          Authorization: `Bearer ${accessToken}` || undefined,
        }
      })
      .then(response => response.data);
  }

}

export default ApiClient;
