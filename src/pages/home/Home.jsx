import React from 'react'
import './home.scss'
import Stories from '../../stories/stories';
import Posts from '../../posts/posts';
const Home = () => {
  return (
    <div className="home">
    <Stories/>
    <Posts/>
    </div>
  );
}

export default Home