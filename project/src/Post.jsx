
const postTitle = {
    font:"bold",
    color:"red"
}


function Post(props) {
    
    return (
    <>
        <div className={"post"}>
            <h5 className={postTitle}> {props.title}</h5>
                <hr/>
            <p style={{color:" rgba(0, 0, 0, 0.5)"}}>
                {props.content}
            </p>
        </div>


    </>

)
    
}
export default Post