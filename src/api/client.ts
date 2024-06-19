import { http, HttpResponseResolver, HttpResponse } from 'msw'
import { setupWorker } from 'msw/browser'
import { NextApiRequest, NextApiResponse } from 'next';

const worker = setupWorker(
  http.get('/todoList', (res: HttpResponseResolver<never, SdkRequest, SdkResponse>) => {
    return res(
      HttpResponse.json([
        { id: 1, name: 'Task 1', completed: false, dueDate: '2023-05-01', description: 'Complete task 1' },
        { id: 2, name: 'Task 2', completed: true, dueDate: '2023-05-05', description: 'Complete task 2' },
        { id: 3, name: 'Task 3', completed: false, dueDate: '2023-05-10', description: 'Complete task 3' },
      ])
    )
  }),
  http.post('/todoList', (req, res) => {
    const { id, name, completed, dueDate, description } = req.body
    return res(HttpResponse.json({ id, name, completed, dueDate, description, loggedIn: true }))
  }),
)

worker.start()

// export async function client(endpoint: RequestInfo, { body, ...customConfig }: { body?: any, customConfig?: RequestInit } = {}) {
//     const headers = { 'Content-Type': 'application/json' }
  
//     const config: RequestInit = {
//       method: body ? 'POST' : 'GET',
//       ...customConfig,
//       headers: {
//         ...headers,
//         ...(customConfig.headers || {}),
//       },
//     }
  
//     if (body) {
//       config.body = JSON.stringify(body)
//     }
  
//     let data
//     try {
//       const response = await window.fetch(endpoint, config)
//       data = await response.json()
//       if (response.ok) {
//         // Return a result object similar to Axios
//         return {
//           status: response.status,
//           data,
//           headers: response.headers,
//           url: response.url,
//         }
//       }
//       throw new Error(response.statusText)
//     } catch (err) {
//       return Promise.reject(err.message ? err.message : data)
//     }
//   }
  
//   client.get = function (endpoint: RequestInfo, customConfig = {}) {
//     return client(endpoint, { ...customConfig, method: 'GET' })
//   }
  
//   client.post = function (endpoint: RequestInfo, body: string, customConfig = {}) {
//     return client(endpoint, { ...customConfig, body })
//   }

// worker.start()

// export async function client(endpoint: RequestInfo, { body, ...customConfig }: { body?: any, customConfig?: RequestInit } = {}) {
//     const headers = { 'Content-Type': 'application/json' }
  
//     const config: RequestInit = {
//       method: body ? 'POST' : 'GET',
//       ...customConfig,
//       headers: {
//         ...headers,
//         ...(customConfig.headers || {}),
//       },
//     }
  
//     if (body) {
//       config.body = JSON.stringify(body)
//     }
  
//     let data
//     try {
//       const response = await window.fetch(endpoint, config)
//       data = await response.json()
//       if (response.ok) {
//         // Return a result object similar to Axios
//         return {
//           status: response.status,
//           data,
//           headers: response.headers,
//           url: response.url,
//         }
//       }
//       throw new Error(response.statusText)
//     } catch (err) {
//       return Promise.reject(err.message ? err.message : data)
//     }
//   }
  
//   client.get = function (endpoint: RequestInfo, customConfig = {}) {
//     return client(endpoint, { ...customConfig, method: 'GET' })
//   }
  
//   client.post = function (endpoint: RequestInfo, body: string, customConfig = {}) {
//     return client(endpoint, { ...customConfig, body })
//   }