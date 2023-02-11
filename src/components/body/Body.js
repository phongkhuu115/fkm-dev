import React, { useState, useEffect, useLayoutEffect } from 'react';
import uit from '../../assets/Logo_UIT.png'
import network from '../../assets/logo_network.png'
import personal from '../../assets/personal.jpg'
import { FaReact, FaNodeJs, FaArrowRight } from 'react-icons/fa'
import {BiSmile} from 'react-icons/bi'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

function Body(props) {
  const [state, setState] = useState('');

  const [personalInfo] = useTypewriter({
    words: ['Minh Phong', 'a Fullstack Developer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  })

  return (
    <>
      <div id='body' className='w-full h-screen flex justify-center items-center '>
        <div className='min-[600px]:flex'>
          <div className='max-[600px]: ml-16'>
            <p className='text-white'>Hello,
              <br />
              <span className='text-[36px] font-bold'>I'm
                <span className='name'> {personalInfo}<Cursor cursorStyle='<'></Cursor>
                </span>
              </span>
            </p>
            <p className='text-white info'>
              Currently, I'm a student of <span className='study'>University of Infomation Technology</span>
            </p>
            <p className='text-white'>My major is <span className='study'>Computer Networks and Data Communication</span></p>
            <div className='flex mt-3'>
              <img src={uit} alt="" className='w-[60px] mr-5' />
              <img src={network} alt="" className='w-[60px]' />
            </div>
            <p className='text-white flex items-center mt-3'>Welcome to my world, and nice to meet you <BiSmile className='ml-2' size={20}></BiSmile></p>
            <div className='text-white border-4 cursor-pointer font-semibold w-[200px] p-4 mt-5 flex justify-between items-center hover:bg-red-700 max-[600px]:hidden'> 
              View my Project
              <FaArrowRight></FaArrowRight>
            </div>
          </div>
          <div className='max-[600px]:flex justify-center mt-5'>
            <img src={personal} alt="" className='max-[600px]:text-center w-[250px] md:ml-24 rounded-[50%]' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Body;