import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <h1>My Todo List</h1>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 3px 3px 8px gray;
  background-color: white;

  h1 {
    width: 100%;
    text-align: center;
    font-size: 26px;
    font-weight: bold;
  }
`;
// const HeaderRight = styled.div``;

export default Header;
