import React from 'react';
import { Link } from 'react-router-dom';

import './Welcome.scss';

const Welcome = () => {
  return (
    <div className='welcome'>
      <h1 className='welcome__heading'>
        Welcome!
      </h1>
      <button type="button" className='welcome__button'>
        <Link to='/step/1' className='welcome__link'>
          Start
        </Link>
      </button>
    </div>
  )
}

export default Welcome;
