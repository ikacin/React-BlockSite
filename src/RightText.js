import Icons from './Icons';
import IconTwo from './IconTwo';
const RightText = (props) => {
    return(
        <div className={"main-text"}>
            <h3 className = {props.textPath} >HI THERE !</h3>
            <h1 className = {props.title}>I'M WEB DESİNGER</h1>
            <p className = {props.indent} >I'm a Freelance UI/UX Designer and Developer based in London, England. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>
            <div className={"call-to-actions-home"}>
                <a className={`link-portfolio-one ${props.about}`} href={"#"}><Icons/>MORE ABOUT ME</a>
                <a className={`portfolio-two ${props.port}`} href={"#"}><IconTwo/>PORTFOLIO</a>

            </div>

        </div>
    )


}
export default RightText;