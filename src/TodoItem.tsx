import React from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {click, ItemState, selectCompleted} from './features/itemSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

// This component will represent a single todo item

// In the TodoItem component, you can handle click events to toggle the completion status or remove a todo.
//TODO: Implement method to toggle completion of todos via strikethrough 

  
export default function TodoItem(item: ItemState) {
    const completed = useAppSelector(selectCompleted);

    return (
        <li
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
            onClick={() => useAppDispatch(click())}
        >
            {item.text}
        </li>
    );
}

// export default function TodoItem(item, clickedItems: [], setClickedItems) {
//     const handleClick = (event) => {
//         event.preventDefault();
//         setClickedItems(prevClickedItems => {
//             if (prevClickedItems.includes(item)) {
//                 // if todo is already strikethroughed (clicked on), remove from clickedItems
//                 console.log('remove item: ' + item);
//                 return prevClickedItems.filter(i => i !== item);
//             } else {
//                 // Else, add item to clickedItems
//                 console.log('add item: ' + item);
//                 return [...prevClickedItems, item];
//             }
//         });
//         console.log(`clicked items: ${clickedItems}`);
//     }

//     return (
//         <li
//             style={{ textDecoration: clickedItems.includes(item) ? 'line-through' : 'none' }}
//             onClick={handleClick}
//         >
//             {item}
//         </li>
//     );
// }