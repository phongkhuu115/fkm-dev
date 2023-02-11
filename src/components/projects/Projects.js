import React, { useState, useEffect } from 'react';
import Project from './Project';
import f4koin from '../../assets/f4koin.png'

function Projects(props) {
  const [state, setState] = useState('');

  let projects = [
    {
      name: 'F4Koin',
      type: 'E-commerce',
      position: 'Front-End Developer',
      description: 'A Website for Selling Koi Fish or even anything',
      feature: 'Login; Logout; Register; Main Page: Filter (not complete), Search; Cart: Add/Remove Product; Payment; Chat; Admin: Insert/Delete/Update Product, Order, User',
      complete: '80%',
      image: f4koin,
      url: 'https://f4koin.cyou/'
    },
  ]

  return (
    <>
      <div id='projects' className='flex p-10 m-10 bg-[#0a192f] rounded-[5px] justify-center'>
        {projects.map(item => { 
          return (
            <Project info={item}></Project>
          )
        })}
      </div>
    </>
  )
}

export default Projects;