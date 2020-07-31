import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

interface ClientConfig {
    baseUrl?: string;
    timeout?: number;
}

export const defaultConfig: Readonly<Partial<ClientConfig>> = {
    baseUrl: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/',
    timeout: 15000
};

class Client {
    private readonly _client: AxiosInstance;

    constructor(config: ClientConfig = {}) {
        const mergedConfig = { ...defaultConfig, ...config };

        this._client = axios.create({
            baseURL: mergedConfig.baseUrl,
            timeout: mergedConfig.timeout,
            headers: {
                Accept: 'application/json',
                ContentType: 'application/json'
            }
        });
    }

    private _requestData = async (config: AxiosRequestConfig) => {
        const response = await this._client.request(config);
        return response;
    };

    getPhotos = async (page: number) =>
        this._requestData({
            method: 'get',
            url: `photos?sol=1000&page=${page}&api_key=Yp250cS4GzhdPw57OiWHCtb6qDYN0F0wCfgsP5pR`
        });
}

export default new Client();
