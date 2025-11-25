import './styles/header.css'
import MyForm from './MyForm'
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
            <div>
                <MyForm/>
            </div>
        </>
    )
    
}

export default Header