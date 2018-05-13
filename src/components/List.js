import React from 'react';
import User from './User';

const List = (props) => {

  const recent = props.recent.map((user, i) => (
    <User key={user.username} {...user} index={i}/>
  ))
  const alltime = props.alltime.map((user, i) => (
    <User key={user.username} {...user} index={i}/>
  ))

  return (
    <div className='list'>
      {
        props.sort === 'recent' ? recent : alltime
      }

    </div>
  )
}
export default List;
