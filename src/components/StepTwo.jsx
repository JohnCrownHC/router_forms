import React from 'react';
import { Link } from 'react-router-dom';

const StepTwo = () => {
  return (
    <form>
      <input type="email" placeholder="Please enter an email"/>
      <button type='button'>
        <Link to='/finish'>
          Almost finished
        </Link>
      </button>
    </form>
  )
}

export default StepTwo;