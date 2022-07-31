import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../redux/modules/todos';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const Todo = ({ item }) => {
  const { id, title, content, isDone } = item;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      <TodoCard done={isDone} onClick={() => navigate(`/detail/${id}`)}>
        <CardTitle>
          <h3>{title}</h3>
        </CardTitle>
        <CardComment>
          <h3>{content}</h3>
        </CardComment>

        <ButtonGroup>
          <Button
            text='삭제하기'
            btnColor='red'
            onBtnClick={(e) => {
              e.stopPropagation();
              dispatch(deleteTodo(id));
            }}
          />
          <Button
            text={isDone === false ? '완료' : '취소'}
            btnColor='green'
            onBtnClick={(e) => {
              e.stopPropagation();
              dispatch(toggleTodo(id));
            }}
          />
        </ButtonGroup>
      </TodoCard>
    </Container>
  );
};

export default Todo;

const Container = styled.li`
  padding: 10px 0;
`;

const TodoCard = styled.div`
  width: 230px;
  padding: 10px 20px;
  border: 2px solid ${(props) => (props.done ? 'green' : 'red')};
  border-radius: 10px;
  /* overflow-wrap:  */
`;

const CardTitle = styled.div`
  h3 {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const CardComment = styled.div`
  h3 {
    font-size: 14px;
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 54px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;
