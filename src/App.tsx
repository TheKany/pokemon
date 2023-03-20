import { BrowserRouter } from "react-router-dom";
import styled from "@emotion/styled";
import { Provider } from "react-redux/es/exports";
import { store } from "./Store";

import Header from "./Common/Header";
import PageNavigator from "./PageNavigator";

function App() {
  return (
    <Container>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <PageNavigator />
        </BrowserRouter>
      </Provider>
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
