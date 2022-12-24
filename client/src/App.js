import "./App.css";
import Home from "./pages/Home";
import styled from "styled-components";
import SignUp from "./pages/user/SingUp";
import Login from "./pages/user/Login";
// import HeaderLayout from "./components/layout/HeaderLayout";
import Questions from "./pages/question/Questions";
// import Header from "./components/common/Header";
// import Footer from "./components/common/Footer";
import Profile from "./pages/user/Profile";

const PageLayout = styled.div`
  max-width: 126.4rem;
  height: 100vh;
  margin: auto;
`;
function App() {
  return (
    <>
      <PageLayout>
        <Questions />
      </PageLayout>
    </>
  );
}

export default App;
