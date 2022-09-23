import logo from './logo.svg';
import './App.css';
import './custom.css';
import BurgerMenu from './BurgerMenu';
import BloggerPhoto from './BloggerPhoto';
import RightText from "./RightText";
import LoopIcon from "./LoopIcon";
import CloseIcon from "./CloseIcon";

function App() {
  return (
    <div className="App">

      <BurgerMenu/>
      <LoopIcon/>
        <CloseIcon/>
        <BloggerPhoto picture = "https://istanbul-react.vercel.app/img/leftimage-dark.jpg" index = {<RightText about = {"More About Me"} port= {"PORTFOLIO"}/>}> </BloggerPhoto>

    </div>
  );
}

export default App;
