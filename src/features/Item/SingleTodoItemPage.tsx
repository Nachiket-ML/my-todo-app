import React from 'react'

import { Link } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import {click, ItemState, selectItem} from './itemSlice';
import { useParams } from 'react-router-dom';

import {DueDate} from './DueDate';

// interface SingleTodoItemPageProps {
//     item: ItemState | null;
//   }

// export const SingleTodoItemPage = (item: ItemState) => {
// export const SingleTodoItemPage: React.FC<{ match: { params: ItemState } }> = ({ match }) => {
const SingleTodoItemPage = () => {
    const item = useAppSelector(selectItem);

    if (!item) {
        return (
            <section>
                <h2> Item not found! </h2>
            </section>
        )
    }
    // const itemId = item.id

    // const {itemId} = useParams<ItemState>();

    // const selectedItem = useAppSelector((state) =>
    //     state.todoList.items.find((i) => i.id === itemId)
    // )

    
    //TODO: Add item description (either via link or on this page directly)
    return (
        // <section>
          <article className="item">
            <h2>Item Name: {item.text}</h2>
            <div>
                {/* <DueDate timestamp={date}> </DueDate> */}
                <p> The Due date for this item is <DueDate dueDate={item.dueDate}></DueDate></p>

            </div>
            {/* <p className="post-content">{post.content}</p>
            <ReactionButtons post={post} /> */}
            <Link to={`/todoList/`} className="button">
              Todo List
            </Link>
          </article>
        // </section>
      )
}
export default SingleTodoItemPage;