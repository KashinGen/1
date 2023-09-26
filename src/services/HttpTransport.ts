enum METHODS {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
  }
  
  type Options = {
    method: METHODS;
    data?: unknown;
  };
  
  type OptionsWithoutMethod = Omit<Options, 'method'>;
  
function queryStringify(data: object) {
    // Можно делать трансформацию GET-параметров в отдельной функции
    const queryString =
    '?' +
    Object.entries(data)
        .map(([key, value]) => key + '=' + value)
        .join('&');
    return queryString;
}    
  
export class HTTPTransport {
    get(
        url: string,
        options: OptionsWithoutMethod = {},
    ): Promise<XMLHttpRequest> {
        const api: string = queryStringify(options.data as object);
        return this.request(`${url}${api}`, { ...options, method: METHODS.GET });
    }
  
    put = (
        url: string,
        options: OptionsWithoutMethod = {},
    ): Promise<XMLHttpRequest> =>
        this.request(url, { ...options, method: METHODS.PUT });
  
    post = (
        url: string,
        options: OptionsWithoutMethod = {},
    ): Promise<XMLHttpRequest> =>
        this.request(url, { ...options, method: METHODS.POST });
  
    delete = (
        url: string,
        options: OptionsWithoutMethod = {},
    ): Promise<XMLHttpRequest> =>
        this.request(url, { ...options, method: METHODS.DELETE });
  
    request(
        url: string,
        options: Options = { method: METHODS.GET },
    ): Promise<XMLHttpRequest> {
        const { method, data } = options;
  
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);
  
            xhr.onload = function () {
                resolve(xhr);
            };
  
            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;
  
            if (method === METHODS.GET || !data) {
                xhr.send();
            } else {
                xhr.send(queryStringify(data));
            }
        });
    }
}
