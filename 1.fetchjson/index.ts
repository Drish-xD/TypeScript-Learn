import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((res) => {
  const todo = res.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  todoLog(id, title, completed);
});

const todoLog = (id: number, title: string, completed: boolean) => {
  console.log({
    id,
    title,
    completed,
  });
};
