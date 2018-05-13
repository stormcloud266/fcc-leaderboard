import React from 'react';

const User = (props) => {
  return (
    <div className="user">
      <div className="user__rank">
        <p>{props.index + 1}</p>
      </div>
      <div className="user__name-avi">
        <div className="avi">
          <img src={props.img} />
        </div>
        <a
          target="_blank"
          href={`https://www.freecodecamp.org/${props.username}`}
          className="name">{props.username}
        </a>
      </div>
      <div className="user__recent">
        <p>{props.recent}</p>
      </div>
      <div className="user__alltime">
        <p>{props.alltime}</p>
      </div>
    </div>
  )
}
export default User;
