import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { incrementAction, decrementAction } from '../services/actions/actions';

function IncDec() {

  const myState = useSelector((state) =>state.incDecreducer)
  const dispatch = useDispatch()
  return (
    <>
      <div className='main-div'>
        <div className='center-div'>
        <h2>React Redux Increment & Decrement</h2>
          <h1 className='mt-5'>{myState}</h1>
          <button className='button1 mt-5' onClick={() => dispatch(incrementAction())}><box-icon name='chevrons-up' ></box-icon></button>
          <button className='button2' onClick={() => dispatch(decrementAction())}><box-icon name='chevrons-down' ></box-icon></button>
        </div>
      </div>
    </>
  );
}

export default IncDec;
