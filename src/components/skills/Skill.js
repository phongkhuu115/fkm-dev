import React, { useState, useEffect } from 'react';
import { FaReact, FaNodeJs, FaBootstrap, FaHtml5, FaGithub } from 'react-icons/fa'
import { IoLogoCss3 } from 'react-icons/io'
import { DiJavascript } from 'react-icons/di'
import { SiTailwindcss } from 'react-icons/si'
import {FcDeployment} from 'react-icons/fc'

function Skills(props) {
  const [state, setState] = useState('');

  useEffect(() => {
    return () => {

    }
  }, []);

  return (
    <>
      <div id='skills' className='flex max-[1800px]:flex-col max-[1800px]:items-start items-center bg-[#ffffff33] p-10 m-10 rounded-[5px] border-[1px] border-[#ffffff4d]'>
        <div className=''>
          <div class="expand flex items-center">
            <div className='my-auto flex-grow-0 flex-shrink-0 basis-[90px]'>
              <h2 className='text-[#e96228] font-semibold text-[20px] text-center'>
                HTML
              </h2>
              <div className='mt-2 flex justify-center'>
                <FaHtml5 size={30} color={'#e96228'}></FaHtml5>
              </div>
            </div>
            <span className='ml-11 text-justify'>
              As a Web Developer, I quite familiar with HTML.
            </span>
          </div>
          <div class="expand flex items-center">
            <div className='my-auto flex-grow-0 flex-shrink-0 basis-[90px]'>
              <h2 className='text-[#254bdd] font-semibold text-[20px] text-center'>
                CSS
              </h2>
              <div className='mt-2 flex justify-center'>
                <IoLogoCss3 size={30} color={'#254bdd'}></IoLogoCss3>
              </div>
            </div>
            <span className='ml-11 text-justify'>
              Despite HTML, CSS is something else, I struggled with CSS at first, but now, can't say I master it, but I can get the job done now.
            </span>
          </div>
          <div class="expand flex items-center">
            <div className='my-auto flex-grow-0 flex-shrink-0 basis-[90px]'>
              <h2 className='text-[#ead41c] font-semibold text-[20px] text-center'>
                Javascript
              </h2>
              <div className='mt-2 flex justify-center'>
                <DiJavascript size={30} color={'#ead41c'}></DiJavascript>
              </div>
            </div>
            <span className='ml-11 text-justify'>
              Javascript is my main language, I know how to work with Dom, work with data, and do a few effects with Javascript. Familiar with Javascript concepts such as Promise, Scope, Asynchronous, ...
            </span>
          </div>
        </div>
        <div className=''>
          <div class="expand flex items-center">
            <div className='my-auto flex-grow-0 flex-shrink-0 basis-[90px]'>
              <h2 className='text-[#61dafb] font-semibold text-[20px] text-center'>
                ReactJS
              </h2>
              <div className='mt-2 flex justify-center'>
                <FaReact size={30} color={'#61dafb'}></FaReact>
              </div>
            </div>
            <span className='ml-11'>
              ReactJS is a awesome Javascript Framework, I work most with it because React is very good with handling data and render component base on data. I can work with React's Functional Component, React Hooks.
              <div className='w-full bg-[#333]'>

              </div>
            </span>
          </div>
          <div class="expand flex items-center">
            <div className='my-auto flex-grow-0 flex-shrink-0 basis-[90px]'>
              <h2 className='text-[#7cae5e] font-semibold text-[20px] text-center'>
                NodeJS
              </h2>
              <div className='mt-2 flex justify-center'>
                <FaNodeJs size={30} color={'#7cae5e'}></FaNodeJs>
              </div>
            </div>
            <span className='ml-11'>
              NodeJS isn't a framework, it's a runtime, so what I work with is frameworks which run on NodeJS such as ExpressJS.
            </span>
          </div>
          <div class="expand flex items-center">
            <div className='my-auto flex-grow-0 flex-shrink-0 basis-[90px]'>
              <h2 className='text-[#7532f9] font-semibold text-[20px] text-center'>
                Bootstrap
              </h2>
              <div className='mt-2 flex justify-center'>
                <FaBootstrap size={30} color={'#7532f9'}></FaBootstrap>
              </div>
            </div>
            <span className='ml-11'>
              I work with Bootstrap because I have low design skill, so if I don't have a sketch of the website, I will use Bootstrap, so as I don't have to worry about styling.
            </span>
          </div>
        </div>
        <div className=''>
          <div class="expand flex items-center">
            <div className='my-auto flex-grow-0 flex-shrink-0 basis-[90px]'>
              <h2 className='text-[#38bdf8] font-semibold text-[20px] text-center'>
                Tailwind
              </h2>
              <div className='mt-2 flex justify-center'>
                <SiTailwindcss size={30} color={'#38bdf8'}></SiTailwindcss>
              </div>
            </div>
            <span className='ml-11'>
              Opposite with Bootstrap, Tailwind require lots of styling skill and deep understanding about css, the benefit of Tailwind is it very good for responsive and re-use CSS. I use Tailwind whenever I have a sketch, and in my opinion Tailwind create more beautiful UI than Boostrap.
            </span>
          </div>
          <div class="expand flex items-center">
            <div className='my-auto flex-grow-0 flex-shrink-0 basis-[90px]'>
              <h2 className='text-[#fff] font-semibold text-[20px] text-center'>
                Github
              </h2>
              <div className='mt-2 flex justify-center'>
                <FaGithub size={30} color={'#fff'}></FaGithub>
              </div>
            </div>
            <span className='ml-11'>
              Can't say I'm an expert with Github, but at least I can work with Github quite comfortable.
            </span>
          </div>
          <div class="expand flex items-center">
            <div className='my-auto flex-grow-0 flex-shrink-0 basis-[90px]'>
              <h2 className='text-red-600 font-semibold text-[20px] text-center'>
                Deploy  
              </h2>
              <div className='mt-2 flex justify-center'>
                <FcDeployment size={30} color={'#db2626'}></FcDeployment>
              </div>
            </div>
            <span className='ml-11'>
              I know how to work with Hosting and VPS, Domain, and DNS.
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills;