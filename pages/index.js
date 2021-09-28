import React from 'react';
import Router from 'next/router';


const Home = () => {
  return (
    <div>
      <div>
        <h1>Welcome to React Library</h1>
        <button type='button' onClick={() => Router.push('/private')}>
          Log in
        </button>
      </div>
    </div>
  );
};

export default Home;
