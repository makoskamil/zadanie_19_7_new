import React from 'react';
import {ADD_COMMENT} from './actions.js';

const Comment = ({text, votes, id, thumbUpComment}) =>
  <li>
    {text} <span>votes: {votes}</span> <button onClick={() => thumbUpComment(id)}>Thumb up</button>
  </li>;

export default Comment;