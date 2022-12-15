// import React from 'react';
// import './App.css';
// const todosEndpoint = 'http://localhost:3001/todos';
// const TodoApp = () => {
//   const [todos, setTodos] = React.useState([]);
//   React.useEffect(() => {
//     const getData = async () => {
//       const response = awaitfetch(todosEndpoint);
//       const data = await response.json();
//       setTodos(data);
//     };
//     getData();
//   }, []);
//   return (
//     <div className="App">
//       {todos.map((todo) => (
//         <div key={todo.id}>{todo.title}</div>
//       ))}
//     </div>
//   );
// };
// export default TodoApp;

import React from 'react';
import useSWR from 'swr';
const todosEndpoint = 'http://localhost:3001/todos';
const getData = async () => {
  const response = awaitfetch(todosEndpoint);
  return await response.json();
};
const TodoApp = () => {
  const { data: todos } = useSWR(todosEndpoint, getData);

  return (
    <div>
      {/* { todos && todos.map(todo=> (
            <div key={todo.id}>{todo.title}</div>
        )
        } */}
    </div>
  );
};
export default TodoApp;
