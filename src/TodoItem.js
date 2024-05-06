import React, { useState } from 'react';
// This component will represent a single todo item

// In the TodoItem component, you can handle click events to toggle the completion status or remove a todo.
//TODO: Implement method to toggle completion of todos via strikethrough 
export default function TodoItem(item, clickedItems, setClickedItems) {
    console.log(item);
    let isStrikeThrough = clickedItems.includes(item);

    const handleRemoveItem = (item) => {
        setClickedItems((clickedItems) => clickedItems.filter(function(element) {
            return element !== item;
        }));
      }

    // strikethrough item on click and add it to clickedItems
    // if already strikethroughed, remove from clickedItems
    const handleClick = (event) => {
        event.preventDefault();
        setClickedItems(prevClickedItems => {
            if (prevClickedItems.includes(item)) {
                return prevClickedItems.filter(i => i !== item);
            } else {
                return [...prevClickedItems, item];
            }
        });
    }

    return (
        <li
            style={{ textDecoration: clickedItems.includes(item) ? 'line-through' : 'none' }}
            onClick={handleClick}
        >
            {item}
        </li>
    );
}