import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addTodo } from '../redux/modules/todos';

const Form = () => {
  const titleRef = React.createRef(null);
  const contentRef = React.createRef(null);
  const dispatch = useDispatch();
  // const nextId = useRef(1);

  // input데이터 저장
  const [todoData, setTodoData] = useState({
    id: parseInt(Math.random() * 1000),
    title: '',
    content: '',
    isDone: false,
  });
  const { title, content } = todoData;

  // input 데이터 받아오기
  const handleTodoInput = (e) => {
    setTodoData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  // + 버튼 클릭 이벤트
  const onAddTodo = (e) => {
    e.preventDefault();

    if (title.trim() !== '' && content.trim() !== '') {
      const inputData = {
        id: parseInt(Math.random() * 1000),
        title: title,
        content: content,
        isDone: false,
      };

      setTodoData((prev) => {
        return {
          ...prev,
          ...inputData,
        };
      });
      dispatch(addTodo(todoData));
      setTodoData((prev) => {
        return {
          ...prev,
          title: '',
          content: '',
        };
      });
    } else {
      alert('내용을 입력해주세요');

      if (content.trim() === '') contentRef.current.focus();
      if (title.trim() === '') titleRef.current.focus();
    }
  };

  return (
    <Container>
      <TextArea>
        <InputArea>
          <input
            type='text'
            placeholder='Title'
            name='title'
            onChange={handleTodoInput}
            value={title}
            ref={titleRef}
          />
        </InputArea>
        <InputArea>
          <input
            type='text'
            placeholder='Content'
            name='content'
            onChange={handleTodoInput}
            value={content}
            ref={contentRef}
          />
        </InputArea>
      </TextArea>
      <ButtonArea>
        <button onClick={onAddTodo}>+</button>
      </ButtonArea>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 3px 3px 8px gray;
  color: white;
  padding: 20px;
`;

const TextArea = styled.div``;

const InputArea = styled.div`
  width: 400px;
  margin-right: 20px;

  & + & {
    margin-top: 14px;
  }

  input {
    margin-left: 4px;
    border-radius: 6px;
    width: 100%;
    height: 40px;
    padding: 4px 10px;
    border: 1px solid gray;
    outline: none;
    box-sizing: border-box;
    background-color: transparent;
  }
`;

const ButtonArea = styled.div`
  button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid gray;
    cursor: pointer;
    font-size: 30px;

    &:hover {
      background-color: #f6f6f6;
    }
  }
`;

export default Form;
