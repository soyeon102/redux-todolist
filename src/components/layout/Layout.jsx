import styled from 'styled-components';
import Header from '../Header';

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Contents>{children}</Contents>
    </Container>
  );
};

const Container = styled.div`
  min-width: 800px;
  max-width: 1200px;
  box-sizing: content-box;
  padding-bottom: 50px;
  margin: 0 auto;
`;

const Contents = styled.div``;

export default Layout;
