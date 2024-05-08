
export async function client(endpoint: RequestInfo, { body, ...customConfig }: { body?: any, customConfig?: RequestInit } = {}) {
    const headers = { 'Content-Type': 'application/json' }
  
    const config: RequestInit = {
      method: body ? 'POST' : 'GET',
      ...customConfig,
      headers: {
        ...headers,
        ...(customConfig.headers || {}),
      },
    }
  
    if (body) {
      config.body = JSON.stringify(body)
    }
  
    let data
    try {
      const response = await window.fetch(endpoint, config)
      data = await response.json()
      if (response.ok) {
        // Return a result object similar to Axios
        return {
          status: response.status,
          data,
          headers: response.headers,
          url: response.url,
        }
      }
      throw new Error(response.statusText)
    } catch (err) {
      return Promise.reject(err.message ? err.message : data)
    }
  }
  
  client.get = function (endpoint: RequestInfo, customConfig = {}) {
    return client(endpoint, { ...customConfig, method: 'GET' })
  }
  
  client.post = function (endpoint: RequestInfo, body: string, customConfig = {}) {
    return client(endpoint, { ...customConfig, body })
  }