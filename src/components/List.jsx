import Todo from './Todo';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const List = () => {
  const todoList = useSelector((state) => state.todos);
  console.log('todoList', todoList);

  return (
    <div>
      <TodoContent>
        <TodoList>
          <h2>Working🔥</h2>
          <TodoCard>
            {todoList.map(
              (todo) =>
                todo.isDone === false && <Todo item={todo} key={todo.id} />
            )}
          </TodoCard>
        </TodoList>

        <TodoList>
          <h2>Done🎉</h2>
          <TodoCard>
            {todoList.map(
              (todo) =>
                todo.isDone === true && <Todo item={todo} key={todo.id} />
            )}
          </TodoCard>
        </TodoList>
      </TodoContent>
    </div>
  );
};

export default List;

const TodoContent = styled.div``;

const TodoList = styled.div`
  margin-top: 20px;
  border-radius: 10px;
  background-color: #f6f6f6;
  padding: 20px;
`;

const TodoCard = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 260px);
  row-gap: 10px;
  column-gap: 40px;
  cursor: pointer;
`;

const TodoLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
