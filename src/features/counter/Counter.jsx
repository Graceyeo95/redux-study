import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, reset } from './counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <section className='flex flex-col gap-y-[1rem]'>
      <p>{count}</p>
      <div className='flex justify-center gap-x-[1rem]'>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div className='flex gap-x-[1rem]'>
        <input
          type='text'
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add Value
        </button>
      </div>
      <button onClick={resetAll}>Reset</button>
    </section>
  );
};

export default Counter;
