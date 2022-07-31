import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Button from './Button';

const Detail = () => {
  const param = useParams();
  const navigate = useNavigate();
  const todoList = useSelector((state) => state.todos);
  const thisTodo = todoList.find((todo) => todo.id === parseInt(param.id));

  // console.log(thisTodo);

  return (
    <Container>
      <DetailTop>
        <TodoId>Todo ID: {thisTodo.id}</TodoId>
        <Button
          text='이전으로'
          btnColor='#bebebe'
          onBtnClick={() => navigate(-1)}
        />
      </DetailTop>
      <Title>{thisTodo.title}</Title>
      <Content>{thisTodo.content}</Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f6f6f6;
  padding: 30px 50px;
`;

const TodoId = styled.div`
  font-weight: bold;
`;

const DetailTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 28px;
`;
const Content = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;

export default Detail;
