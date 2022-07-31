import styled from 'styled-components';

const Button = ({ text, btnColor, onBtnClick }) => {
  return (
    <Btn btnColor={btnColor} onClick={onBtnClick}>
      {text}
    </Btn>
  );
};

const Btn = styled.button`
  & + & {
    margin-left: 10px;
  }

  &:hover {
    cursor: pointer;
    color: white;
    background-color: ${(props) => props.btnColor};
  }

  width: 110px;
  text-align: center;
  background-color: transparent;
  font-size: 14px;
  padding: 5px 0;
  border: 2px solid ${(props) => props.btnColor};
  border-radius: 5px;
`;

export default Button;
