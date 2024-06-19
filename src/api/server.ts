// import { setupWorker } from 'msw/browser';
// import {http, HttpResponse} from 'msw';
// import {nanoid} from '@reduxjs/toolkit';
// import { ItemState } from '../features/Item/itemSlice';
// import { factory } from 'msw';

// // import { rest, RestRequest, RestContext, MockedResponse } from 'msw';

// const ARTIFICIAL_DELAY_MS = 2000;

// //TODO: Generate random todoItems
// export const todoItems = [
//     {id: nanoid(), name: 'Learn React', completed: false, dueDate: new Date(), description: 'Ramp up on React/Redux with TypeScript'},
//     {id: nanoid(), name: 'Build a todo app', completed: false, dueDate: new Date(), description: 'Build a React/Redux app that uses Redux fundamentals, including store, dispatch, action, reducer, async thunks, and data fetching'}
// ]

// function delay(ms: number) {
//     return new Promise((resolve) => setTimeout(resolve, ms))
// }

// // const serializeItem = (item) => ({
// //     ...item,

// // })
// /* MSW REST API Handlers */

// export const handlers = [
//     http.get('/fakeApi/posts', async function () {
//         await delay(ARTIFICIAL_DELAY_MS)
//         return HttpResponse.json(todoItems)
//     }),
//     http.post('/fakeApi/posts', async function ({ request }) {
//         const data = await request.json();
//         if (typeof data === "string" && data === "error") {
//             await delay(ARTIFICIAL_DELAY_MS);
//             return new HttpResponse(JSON.stringify("Server error saving this post"),
//                 {
//                 status: 500,
//                 },
//             )
//         }
//         data.id = 
        
//         await delay(ARTIFICIAL_DELAY_MS)
//         return HttpResponse.json(todoItems)
//     })
// ]