import React from 'react'
import './stories.scss'
import {useSelector} from 'react-redux'
const Stories = () => {
    const user =useSelector((state)=>state)
    console.log(user);
    const stories = [
      {
        id: 1,
        name: "kiran",
        image:
          "https://aniportalimages.s3.amazonaws.com/media/details/ANI-20221016054738.jpeg",
      },
      {
        id: 2,
        name: "kiran",
        image:
          "https://aniportalimages.s3.amazonaws.com/media/details/ANI-20221016054738.jpeg",
      },
      {
        id: 3,
        name: "kiran",
        image:
          "https://aniportalimages.s3.amazonaws.com/media/details/ANI-20221016054738.jpeg",
      },
      {
        id: 4,
        name: "kiran",
        image:
          "https://aniportalimages.s3.amazonaws.com/media/details/ANI-20221016054738.jpeg",
      }
    ];
  return (
    <div className="stories">
      <div className="story">
        <img
          src="https://aniportalimages.s3.amazonaws.com/media/details/ANI-20221016054738.jpeg"
          alt=""
        />
        <span>kirna</span>
        {/* <h1>hello</h1> */}
        <button>+</button>   
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.image} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Stories