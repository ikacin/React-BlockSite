import logo from './logo.svg';
import './App.css';
import './custom.css';
import BurgerMenu from './BurgerMenu';
import BloggerPhoto from './BloggerPhoto';
import RightText from "./RightText";
import LoopIcon from "./LoopIcon";
import {useState} from "react";



function App() {
    const [resim,setResim] = useState("https://istanbul-react.vercel.app/img/leftimage-dark.jpg");
    const [color,setColor] = useState();
    const [about,setAbout] = useState();
    const[port,setPort] = useState();
    const[textPath,setTextPath] = useState(`red`);
    const[title,setTitle] = useState(`red`);
    const[indent,setIndent] = useState(`red`);

    const changePortfolio = () => {

        setResim("https://istanbul-react.vercel.app/img/leftimage-light.jpg")
        setAbout("More Details");
        setPort("More Click");
        setTextPath(`blue`);
        setTitle(`blue`);
        setIndent(`blue`);
}


  return (

      <>

          <div className="App animated">

              <BurgerMenu/>
              <div className={"drops-container"}>
                  <h6 className={"style-swtch"}>STYLE SWITCHER</h6>
                  <img onClick={() => changePortfolio()} src={"https://istanbul-react.vercel.app/img/styleswitcher/red.png"}/>
              </div>



              <BloggerPhoto picture = {resim} textPath ={textPath} title = {title} indent = {indent}  about = {about} port = {port} />


          </div>

      </>

  );
}

export default App;
