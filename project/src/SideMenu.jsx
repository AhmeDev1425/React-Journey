
const sideStyle = {
    backgroundColor:"red",
    height : "20%",
    width: "300px",
    border:"solid teal",
    borderRadius: "10px",
    margin:" 5px 50px 5px 5px"


}

function SideMenu({name, children}) {
    const child = children;
    return(
        <>

            <div>
                {child}
            </div>


            <div style={sideStyle}>
                <h1>{name}</h1>
                <h1>asdsa</h1>
                <h1>asdsa</h1>
                <h1>asdsa</h1>
                <h1>asdsa</h1>
                <h1>asdsa</h1>
                <h1>asdsa</h1>
                <h1>asdsa</h1>
                <h1>asdsa</h1>
                <h1>asdsa</h1>
                <h1>asdsa</h1>
                <h1>asdsa</h1>
                <h1>asdsa</h1>
            </div>

        </>
    )
    
}

export default SideMenu