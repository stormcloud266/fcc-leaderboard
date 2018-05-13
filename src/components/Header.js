import React from 'react';

const Header = (props) => {

  const handleSort = (option) => {
    if (option !== props.sort) {
      props.handleSort(option)
    }
  }

  return (
    <header className='header'>
      <div className='header__title'>
        <h1>Free Code Camp Leaderboard</h1>
      </div>

      <div className='header__sections'>
        <div className='header__sections--rank'><p>#</p></div>
        <div className='header__sections--name'><p>Camper Name</p></div>
        <div className='header__sections--recent' onClick={() => handleSort('recent')}>
          <p className={props.sort === 'recent' ? 'active' : ''}
          >Points in past 30 days</p>
        </div>
        <div className='header__sections--alltime' onClick={() => handleSort('alltime')}>
          <p className={props.sort === 'alltime' ? 'active' : ''}>All time points</p>
        </div>
      </div>
    </header>
  )
}
export default Header;
