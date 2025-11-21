import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
  import "./styles/post.css"

import Post from './Post.jsx'
import SideMenu from './SideMenu.jsx'
import Header from './Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <div style={{display:"flex"}} >
        <div className={"posts-container"} >
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <SideMenu name="Ahmed" />
    </div>
  </StrictMode>,
)
