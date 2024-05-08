import { parseISO, formatDistanceToNow } from 'date-fns'

// export default function DueDate(timestamp: string | null) {
// // export const DueDate = ({timestamp}: {timestamp: string}) => {
//   let timeTillDue = ''
//   if (timestamp) {
//     const date = parseISO(timestamp)
//     const timePeriod = formatDistanceToNow(date)
//     timeTillDue = `In ${timePeriod} days`
//   }

//   return (
//     <span title={'Timestamp'}>
//       &nbsp; <i>{timeTillDue}</i>
//     </span>
//   );
// }

// The code you provided already fulfills the user's request. The `DueDate` function takes a `Date` object as input, computes the distance to the due date using `formatDistanceToNow` from the `date-fns` library, and returns it wrapped inside a JSX `span` element with the title "Time Till Due".

// ```tsx

export const DueDate = ({dueDate}: {dueDate: Date}) => {
  let timeTillDue = '';
  if (dueDate) {
    console.log(dueDate);
    const timePeriod = formatDistanceToNow(dueDate);
    timeTillDue = `In ${timePeriod} days`;
  }

  return (
    <span>
      &nbsp; <i>{timeTillDue}</i>
    </span>
  );
};


// export const DueDate = (dueDate: Date) => {
//     // export const DueDate = ({timestamp}: {timestamp: string}) => {
//       let timeTillDue = ''
//       if (dueDate) {
//         // const date = parseISO(dueDate.toISOString)
//         const timePeriod = formatDistanceToNow(dueDate)
//         timeTillDue = `In ${timePeriod} days`
//       }
    
//       return (
//         <span title={'Time Till Due'}>
//           &nbsp; <i>{timeTillDue}</i>
//         </span>
//       )
//     }
    
