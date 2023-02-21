import React ,{useState} from 'react';
type CounterProps = {
   
    setCount: React.Dispatch<React.SetStateAction<number>>;
    children: React.ReactNode;
}

const Counter = ({ children, setCount }: CounterProps) => {
    
  return (
      <div>Counter
            <p>{children}</p>
        
          <button 
              onClick={() => setCount(prevCount => prevCount + 1)}>
              

                Increment
          </button>
          <button 
              onClick={() => setCount(prevCount => prevCount - 1)}>
              
                
                Decrement
          </button>
    </div>
  )
}

export default Counter