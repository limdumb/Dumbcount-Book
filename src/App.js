import './App.css';
import { DemoButton } from "./components/DemoButton";

function App() {
  return (
    <div>
      <DemoButton
        name={"커스텀 버튼"}
        backgroundColor={'blue'}
        color={'white'}
      />
    </div>
  )
}

export default App;
