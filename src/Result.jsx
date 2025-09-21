import React from 'react'

const Result = ({guess,number}) => {
    
    let result = ''
    if(number){

        if(number>guess){
            result= 'Too High! Try a smaller number.'
        }
        else if(number<guess){
            result= 'Too Low! Try a bigger number.'
        }
        else if(number==guess){
            result= `Yippee! You got it right! The number was ${number}`
            
        }
        else{
            result = 'enter valid input' 
        }
    }
  return (
    <div>
      <p className='mt-3'>you guessed : {result} </p>
    </div>
  )
}

export default Result
