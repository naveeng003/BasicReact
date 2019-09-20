import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './LikesCounter.module.css';

const LikesCounter = props => {
  const likesCheck = 5;

  const [count, setCount] = useState(0);
  const [hasMoreLikes, setHasMoreLikes] = useState(false);

  useEffect(() => {
    if(likesCheck === count){
      setHasMoreLikes(true);
    }
  });

  return (
    <div className="loginOut" style={{textAlign:'center'}}>
      <p>Your Likes: {count}</p>
      <div className="row">
        <div className="col-md-12" style={{alignContent:'center'}}>
          <button type="button" className="col-md-3" onClick={() => { setCount(count + 1); }}>Like</button>
        </div>
        <div className="col-md-12" style={{alignContent:'center'}}>
        <p style={{display: hasMoreLikes ? "block" : "none"}}>
          Your have {likesCheck} or more likes
          </p>
        </div>
      </div>
    </div>
  );
};

LikesCounter.defaultProps = {};

LikesCounter.propTypes = {};

export default LikesCounter;
