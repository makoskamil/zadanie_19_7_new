import React from 'react';
import {ADD_COMMENT} from './actions.js';

const Comment = ({text, votes}) => <li>{text} <span>votes: {votes}</span></li>;

export default Comment;