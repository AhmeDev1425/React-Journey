import './styles/header.css'
import Appender from "./ListAppend"
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
        <div>
            <Appender/>
        </div>

        </>
    )
    
}

export default Header