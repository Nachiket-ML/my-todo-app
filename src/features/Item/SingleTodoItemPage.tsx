import { Link } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import { selectItem} from './itemSlice';

import {getDueDate} from './DueDate';

const SingleTodoItemPage = () => {
    const item = useAppSelector(selectItem);

    if (!item) {
        return (
            <section>
                <h2> Item not found! </h2>
            </section>
        )
    }

    console.log(item.dueDate);
    return (
        <section>
          <article className="item">
            <h2>Item Name: {item.name}</h2>
            <div>
                <p> Due Date: {getDueDate(item.dueDate)}</p>
                <h3> Item Description: </h3>
                <p>{item.description}</p>
            </div>
            <Link to={`/todoList/`} className="button">
              Todo List
            </Link>
          </article>
        </section>
      )
}
export default SingleTodoItemPage;