import { createGlobalStyle } from "styled-components";
import { CounterWithoutState } from "./Components/1_State/CounterWithoutState";
import { MyComp } from "./MyComp"
import { CounterWithState } from "./Components/1_State/CounterWithState";
import { NameForm } from "./Components/1_State/NameForm";
import { Example_1 } from "./Components/2_Effect/Example_1";
import { Example_2 } from "./Components/2_Effect/Example_2";
import Example_3 from "./Components/2_Effect/Example_3";
import Example_4 from "./Components/2_Effect/Example_4";
import Button from "./Components/3_Props/Button";
import { Menu } from "./Components/3_Props/Menu";
import BasicRouter from "./Components/4_Router/BasicRouter";
import ReactRouter from "./Components/4_Router/ReactRouter";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins;
  }
  a{
    text-decoration: none;
    color: inherit;
    
  }
`
function App() {
  return (
    <div>
      <GlobalStyle />
      <ReactRouter />
    </div>
  );
}
// JSX의 첫번째 규칙!
// empty태그는 태그가 아니지만
// JSX를 감싸주는 중괄호의 역할을 한다!
// 반드시 하나의 부모역할을 해주는 태그가 있어야한다.
// 설령 그것이 빈 태그라고 해도.

// return이라는 키워드는 오른쪽의 한줄을 리턴하도록 되어있다.
// 그러므로 return 하고 바로 오른쪽에 괄호나 태그의 시작이 들어가도록 한다.
// <MyComp /> 

export default App;