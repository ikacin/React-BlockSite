import RightText from "./RightText";
const  BloggerPhoto = (props) => {
        return(
            <div className={"container"}>

                <img  className={"blogger-photo"}  src={props.picture }/>
                <RightText textPath = {props.textPath} title = {props.title} indent = {props.indent} about = {props.about} port= {props.port}/>

            </div>

        )

}

export default BloggerPhoto