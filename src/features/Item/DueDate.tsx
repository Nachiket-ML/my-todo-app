import { formatDistanceToNow } from 'date-fns'

export const getDueDate = (dueDate: Date) => {
  let timeTillDue = '';
  if (dueDate) {
    console.log(dueDate);
    const timePeriod = formatDistanceToNow(dueDate);
    timeTillDue = `in ${timePeriod}`;
  }

  return (
    <span>
      &nbsp; <i>{timeTillDue}</i>
    </span>
  );
};
