import './styles/header.css'
import Appender from "./ListAppend"
import MyForm from './MyForm'
import { Route, Routes } from 'react-router-dom'

const headerTitle = {
    color:"white",
    // backgroundColor:"yellow",


}

function Header() {
    return (
        <>
          
            <Routes>
                <Route path='/header' element={
                    <div>
                            
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
                    </div>

         
                } />
            </Routes>

        </>
    )
    
}

export default Header