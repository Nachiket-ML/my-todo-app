// import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// export const apiSlice = createApi({
//     reducerPath: 'api',
//     baseQuery: fetchBaseQuery({baseUrl: '/fakeApi'}),
//     tagTypes: ['Post'],
//     endpoints: (builder) => ({
//         getItems: builder.query({
//             query: () => '/posts',
//             providesTags: (result = [], error, arg) => [
//                 'Post',
//                 ...result.map(({ id: string }) => ({ type: 'Post', id })),
//             ]
//         })
//     })
// })