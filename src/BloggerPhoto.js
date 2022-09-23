
const  BloggerPhoto = (props) => {
        return(
            <div className={"container"}>
                    <img  className={"blogger-photo"}  src={props.picture }/>
                   {props.index}


            </div>

        )

}

export default BloggerPhoto