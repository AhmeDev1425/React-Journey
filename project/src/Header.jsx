import './styles/header.css'

const headerTitle = {
    color:"white",
    // backgroundColor:"yellow",


}

function Header() {
    return (
        <>
            <div className={'header'}>
                <h1 style={headerTitle}> 
                    PostsApp
                </h1>

            </div>
        </>
    )
    
}

export default Header