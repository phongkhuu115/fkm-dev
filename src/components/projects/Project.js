import React, { useState, useEffect } from 'react';
import {RiFunctionFill} from 'react-icons/ri'

function Project(props) {
  const [state, setState] = useState('');

  useEffect(() => {
    return () => {

    }
  }, []);

  return (
    <>
      <div className='flex flex-col justify-center items-center bg-[#fff] p-5 rounded-[8px]'>
        <img src={props.info.image} alt="" className='w-[350px]' />
        <h1 className='font-semibold text-2xl mt-5'>Project's Name: <span className='text-red-600'>{props.info.name}</span></h1>
        <h3 className=' font-semibold text-lg mt-5'>Project's Type: <span className='text-blue-500'>{props.info.type}</span></h3>
        <h4 className='font-semibold text-sm mt-5'>Position: <span className='text-blue-600'>{props.info.position}</span></h4>
        <p className='text-lg mt-5'>{props.info.description}</p>
        <p className='text-lg mt-5 flex flex-col items-center'>Main Features:
          {props.info.feature.split(';').map(item => {
            return (
              <>
                <p className='flex items-center text-sm my-2 font-semibold'>{item}</p>
              </>
            )
          })}
        </p>
        <a href={props.info.url} className='text-white font-semibold py-3 px-5 mt-3 bg-blue-500 rounded-[4px] hover:bg-blue-700'>View Project</a>
      </div>
    </>
  )
}

export default Project;