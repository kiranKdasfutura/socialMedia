import React from 'react'
import './posts.scss'
import Post from '../components/post/Post';
const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "Prashanth Neel",
      userId: 1,
      profilePic:
        "https://yespunjab.com/wp-content/uploads/2022/04/Prashanth-Neel.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://stat4.bollywoodhungama.in/wp-content/uploads/2023/08/Prabhas_Salaar.jpeg",
    },
    {
      id: 2,
      name: "sudha kongara",
      userId: 2,
      profilePic:
        "https://jfwonline.com/wp-content/uploads/2019/01/Sudha-Kongara.jpg",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, laudantium vitae dignissimos quod, est doloremque, iente assumenda autem quas deserunt nesciunt tempora!",
    },
  ];
  return (
    <div className="posts">
        {
          posts.map((post)=>(
            <Post post={post} key={post.id}/>
          ))
        }
    </div>
  )
}

export default Posts