import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import "./styles/post.css"

import Post from './Post.jsx'
import SideMenu from './SideMenu.jsx'
import Header from './Header.jsx'
import Button from './Button.jsx'
import CounterTask from './CounterTask.jsx'
const posts = [
  { title: "ahmed", content: 1 },
  { title: "ahmed2", content: 2 },
  { title: "ahmed3", content: 3 },
  { title: "ahmed4", content: 4 },
];

const postsList =  posts.map((p) => (
  <Post key={p.title} title={p.title} content={p.content} />
));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Button />
    <Header />
    <div style={{display:"flex"}} >
        <div className={"posts-container"} >
          {postsList}
        </div>
        <CounterTask/>
        <SideMenu/>
    </div>
  </StrictMode>,
)
