import Icons from './Icons';
import IconTwo from './IconTwo';
const RigtText = (props) => {
    return(
        <div className={"main-text"}>
            <h3>HI THERE !</h3>
            <h1>I'M WEB DESİNGER</h1>
            <p>I'm a Freelance UI/UX Designer and Developer based in London, England. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>
            <div className={"call-to-actions-home"}>
                <a className={`btn link-portfolio-one`} href={"#"}><Icons/>{props.about}</a>
                <a className={"btn -portfolio-two"} href={"#"}><IconTwo/>{props.port}</a>

            </div>

        </div>
    )


}
export default RigtText;