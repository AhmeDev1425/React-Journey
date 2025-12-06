import './styles/header.css'
import Appender from "./ListAppend"
import MyForm from './MyForm'
import { Route, Routes } from 'react-router-dom'
import { ContData } from './Contexts.jsx'

const headerTitle = {
    color:"white",
    // backgroundColor:"yellow",


}

function Header() {
    return (
        <>
          
                    <div>
                            
                        <div className={'header'}>
                            <h1 style={headerTitle}> 
                                PostsApp
                            </h1>
                        </div>

                        <div>
                            <MyForm/>
                        </div>
                    </div>
                    
            <Routes>
                <Route path='/appendar/:id' element={
                        <div>
                            <ContData.Provider value={{id:1,name:"ahmed"}} >
                            <Appender/>
                            </ContData.Provider>
                        </div>

         
                } />
            </Routes>

        </>
    )
    
}

export default Header