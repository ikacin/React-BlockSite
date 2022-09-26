import './App.css';
import './custom.css';
import BurgerMenu from './BurgerMenu';
import BloggerPhoto from './BloggerPhoto';
import {useState} from "react";



function App() {
    const [resim,setResim] = useState("https://istanbul-react.vercel.app/img/leftimage-dark.jpg");
    const [color,setColor] = useState();
    const [about,setAbout] = useState(`red`);
    const[port,setPort] = useState(`red`);
    const[textPath,setTextPath] = useState();
    const[title,setTitle] = useState(`red`);
    const[indent,setIndent] = useState();

    const changePortfolio = () => {
        setResim("https://istanbul-react.vercel.app/img/leftimage-light.jpg")
        setAbout(`blue border-blue`);
        setPort(`blue border-blue`);
        setTitle(`blue`);

}

    const changePortfolio2 = () => {
        setResim("https://istanbul-react.vercel.app/img/videolight.jpg")
        setAbout(`blue border-blue`);
        setPort(`blue border-blue`);
        setTitle(`blue`);

    }

    const changePortfolio3 = () => {
        setResim("https://istanbul-react.vercel.app/img/videodark.jpg")
        setAbout(`pink border-pink`);
        setPort(`pink border-pink`);
        setTitle(`pink`);
    }


    return (

      <>

          <div className="App animated">

              <BurgerMenu/>
              <div className={"drops-container"}>
                  <h6 className={"style-swtch"}>STYLE SWITCHER</h6>
                  <img onClick={() => changePortfolio()} src={"https://istanbul-react.vercel.app/img/styleswitcher/red.png"}/>
                  <img onClick={() => changePortfolio2()} src={"https://istanbul-react.vercel.app/img/styleswitcher/green.png"}/>
                  <img onClick={() => changePortfolio3()} src={"https://istanbul-react.vercel.app/img/styleswitcher/magenta.png"}/>
              </div>



              <BloggerPhoto picture = {resim} textPath ={textPath} title = {title} indent = {indent}  about = {about} port = {port} />


          </div>

      </>

  );
}

export default App;
