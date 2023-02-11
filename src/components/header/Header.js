import { useLayoutEffect, useState } from 'react';
import logo from '../../assets/logo.png'
import gsap from 'gsap';
import { Flip } from 'gsap/all';
import { FaBars, FaTimes } from 'react-icons/fa'
import { BsGithub, BsFacebook, BsInstagram } from 'react-icons/bs'

function Header() {
  gsap.registerPlugin(Flip);
  useLayoutEffect(() => {
    let section = document.querySelectorAll('li.relative')
    let active = document.querySelector('.active-nav')

    section.forEach(item => {
      item.addEventListener('click', () => {
        const state = Flip.getState(active)
        item.appendChild(active)
        Flip.from(state, {
          duration: 0.5,
          absolute: true,
          ease: 'elastic.out(1,0.5)'
        })
      })

    })
  }, [])

  const [show, setShow] = useState(false)
  const click_to_show = () => setShow(!show)
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-transparent ">
      <div>
        <img src={logo} alt="" className='w-[50px]' />
      </div>
      <ul className='hidden md:flex'>
        <li className='relative'>
          <a href="#body">Home</a>
          <div className='active-nav h-[3px] bg-[#385ae0] rounded-sm absolute bottom-[-2px] left-0 z-10 w-full'></div>
        </li>
        <li className='relative'><a href="#skills">Skills</a></li>
        <li className='relative'><a href="#projects">Projects</a></li>
        <li className='relative'>Contact</li>
      </ul>
      {/* Navbar Mobile Button */}
      <div className='md:hidden text-gray-300 cursor-pointer z-30' onClick={click_to_show}>
        {!show ? <FaBars></FaBars> : <FaTimes></FaTimes>}
      </div>

      <ul className={!show ? 'hidden' : 'flex absolute top-0 left-0 w-full h-screen justify-center items-center bg-[#0a192f] z-20 flex-col'}>
        <li className='my-4 font-semibold text-xl'>
          Home
        </li>
        <li className='my-4 font-semibold text-xl'>Skills</li>
        <li className='my-4 font-semibold text-xl'>Project</li>
        <li className='my-4 font-semibold text-xl'>Contact</li>
      </ul>
      {/* Contact button */}
      <ul className='fixed left-0 top-[40%] font-semibold'>
        <li className='w-[160px] h-[60px] ml-[-110px] hover:ml-[0px] duration-200 bg-blue-600 flex items-center'>
          <a href="https://www.facebook.com/profile.php?id=100012597317849" className='flex items-center justify-between w-full px-3'>
            Facebook <BsFacebook size={30}></BsFacebook>
          </a>
        </li>
        <li className='w-[160px] h-[60px] ml-[-110px] hover:ml-[0px] duration-200 bg-black flex items-center'>
          <a href="https://github.com/phongkhuu115" className='flex items-center justify-between w-full px-3'>
            Github <BsGithub size={30}></BsGithub>
          </a>
        </li>
        <li className='w-[160px] h-[60px] ml-[-110px] hover:ml-[0px] duration-200 bg-red-500 flex items-center'>
          <a href="https://www.instagram.com/phong.km115/" className='flex items-center justify-between w-full px-3'>
            Instagram <BsInstagram size={30}></BsInstagram>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
