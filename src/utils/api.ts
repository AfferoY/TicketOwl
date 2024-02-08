import { getAPIHost } from "./getAPIHost";

interface IClient {
  body?: any;
  accessToken?: string;
  [key: string]: any;
}

export async function client<T = any>(
  endpoint: string,
  { body, accessToken, ...customConfig }: IClient = {}
): Promise<T> {
  const SERVER_URL = getAPIHost();

  const headers = {
    "Content-Type": "application/json",
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
  };

  const config: RequestInit = {
    method: customConfig.method,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
    ...customConfig,
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    console.log(SERVER_URL + endpoint);

    const response = await fetch(SERVER_URL + endpoint, config);

    const data = await response.json();
    // console.log(SERVER_URL + endpoint);

    if (!response.ok) {
      console.log("response not ok:", data);

      const errorMessage = data.message || response.statusText;
      throw new Error(errorMessage);
    }

    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.log("[api] fetch err: ", err.message);
      return Promise.reject(err);
    } else {
      // err가 Error 타입이 아닌 경우의 처리
      console.log("[api] An unexpected error occurred:", err);
      return Promise.reject(new Error("An unknown error occurred"));
    }
  }
}

// method: 'GET'
client.get = function <T = any>(
  endpoint: string,
  customConfig: { [key: string]: any } = {}
): Promise<T> {
  return client<T>(endpoint, { ...customConfig, method: "GET" });
};

// method: 'POST'
client.post = function <T = any>(
  endpoint: string,
  body: any,
  customConfig: { [key: string]: any } = {}
): Promise<T> {
  return client<T>(endpoint, { ...customConfig, body, method: "POST" });
};

// method: 'DELETE'
client.delete = function <T = any>(
  endpoint: string,
  body: any,
  customConfig: { [key: string]: any } = {}
): Promise<T> {
  return client<T>(endpoint, { ...customConfig, body, method: "DELETE" });
};

// method: 'PATCH' : 리소스의 부분적인 수정
client.patch = function <T = any>(
  endpoint: string,
  body: any,
  customConfig: { [key: string]: any } = {}
): Promise<T> {
  return client<T>(endpoint, { ...customConfig, body, method: "PATCH" });
};

// method: 'PUT' : 리소스의 전체적인 수정 또는 생성
client.put = function <T = any>(
  endpoint: string,
  body: any,
  customConfig: { [key: string]: any } = {}
): Promise<T> {
  return client<T>(endpoint, { ...customConfig, body, method: "PUT" });
};
