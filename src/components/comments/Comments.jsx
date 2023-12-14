import React from 'react';
import './comments.scss';
import { useSelector } from 'react-redux';
const Comments = () => {
    const user = useSelector((state) => state.user.currentUser)
      const comments = [
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
    <div className="comments">
        <div className="write">
            <img src={user.image} alt="" />
            <input type="text" placeholder='comment it..' />
            <button>comment</button>
        </div>
      {comments.map((comment) => (
        <div className="comment" key={comment.userId}>
          <img src={comment.profilePic} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className='date'>1 hour ago</span>
        </div>
      ))}
    </div>
  );
}

export default Comments