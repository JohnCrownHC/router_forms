import React from 'react';
import { Link } from 'react-router-dom';

const Finish = () => {
  return (
    <form>
      <button type='submit'>
        <Link to='/'>
          Submit!
        </Link>
      </button>
    </form>
  )
}

export default Finish;
