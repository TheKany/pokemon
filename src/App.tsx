import { BrowserRouter } from "react-router-dom";
import styled from "@emotion/styled";

import Header from "./Common/Header";
import PageNavigator from "./PageNavigator";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Header />
        <PageNavigator />
      </BrowserRouter>
    </Container>
  );
}

const Container = styled.div`
  display: block;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  border: 1px solid #c0c0c0;
  border-radius: 8px;
  box-shadow: 1px 1px 3px 1px #c0c0c0;
  padding: 10px;
  margin-top: 20px;
`;

export default App;
