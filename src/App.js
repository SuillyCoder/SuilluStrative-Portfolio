import './App.css';

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'About Me', href: "#SecTwo", current: true },
  { name: 'Illustration Work', href: '#SecThree', current: false },
  { name: 'Fullstack Work', href: '#SecFive', current: false },
  { name: 'Get in Touch', href: '#SecSeven', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Example() {
  return (
    <Disclosure as="nav" className="bg-sky-600">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto rounded-full"
                    src="./images/Suillustrative.png"
                    alt=""
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-sky-700 text-white' : 'text-gray-300 hover:bg-sky-400 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}

function SectionOne(){
  return(
    <div className = "bg-gradient-to-b from-sky-500 via-sky-700 to-blue-900 p-24 text-white">
      <img className = "w-72 h-72 sm:w-96 sm:h-96 m-auto rounded-full" src="./images/Suillustrative.png" alt=""/>
      <h2 className = "p-7 text-center text-2xl sm:text-3xl">Hello, I'm...</h2>
      <h1 className = "mt-4 text-center text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold font-seymour">SUILLUSTRATIVE</h1>
      <div className = "mb-16 mt-10">
        <h3 className = "text-center text-1xl"><span className = "mr-5">Digital Illustrator</span>|<span className = "mx-5">Beginner FullStack Developer</span>|<span className = "ml-5">Creative Writer</span></h3>
      </div>
      <center>
        <button className = "bg-sky-500 p-2 m-1 hover:bg-sky-600 hover:scale-110 rounded-2xl"><a href = "#SecTwo">Get to Know Me</a></button>
      </center>
    </div>
  )
}

function SectionTwo(){
  return(
    <center>
      <div id = "SecTwo" className = "scroll-smooth bg-gradient-to-b from-sky-200  to-sky-300 w-full p-24 flex flex-col md:flex-row m-auto items-center justify-center space-x-24">
        <div className = "w-96">
          <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl mb-10 font-seymour'>About Me</h1>
          <h3 className="text-justify leading-7 text-sm sm:leading-6 sm:text-1xl"> Hey there, I’m Enzo Basuil, but here I go by SuilluStrative. I’m 20 years old, born in the Philippines (Cebu), and currently studying a Bachelor of Science in Computer Engineering in the University of San Carlos.

I’ve been doing art and illustration for the past 7 years and some fullstack development stuff just rsecently. SuilluStrative was established way back in October 2022 and is still going strong until now. 

I’m just someone who likes to exercise his ability to create and imagine and bring that to life on whatever medium possible, either through art or through code. It’s the joy of creation that counts.
</h3>
        </div>
        <div>
          <img className = "w-auto h-auto hidden md:block md:w-72 md:h-72 lg:w-96 lg:h-96 m-auto" src="./images/Profile.png" alt=""/>
        </div>
      </div>
    </center>
  );
}

function SectionThree(){
  return(
    <center>
      <div id = "SecThree" className = " bg-gradient-to-b from-sky-800  to-sky-900 w-full flex flex-col lg:flex-row m-auto items-center content-center p-32">
      <div className = "p-1 text-white leading-7">
        <h1 className='text-center font-bold text-4xl p-12 font-seymour'>Artworks</h1>
        <h3 className ='text-italic mb-8 text-justify'>I’ve been doing art and illustration for over 7 years. I mostly delve into character design but I’ve also been trying out other fields such as simple subject artworks, environmental art, comic art, and etc.

I started posting my art way back in 2017 on Instagram (@suillustrative) only to be followed up by the official establishment of my FB page back in 2022.

Some of these range from original compositions, to original character designs, to fanart. I try to cover a wide range of art fields while still being consistent towards one specific style
.</h3>
      </div>
      <div className = "w-96 h-96 md:w-auto md:h-auto grid grid-rows-3 grid-cols-3 flex-row md:ml-20 gap-5">
        <img className ="border-white border-2 w-auto h-auto p-1 col-start-1 row-start-1" src="./images/Artworks/R1C1.png" alt="" />
        <img className ="border-white border-2 w-auto h-auto p-1 col-start-2 row-start-1" src="./images/Artworks/R1C2.png" alt="" />
        <img className ="border-white border-2 w-auto h-auto p-1 col-start-3 row-start-1" src="./images/Artworks/R1C3.png" alt="" />

        <img className ="border-white border-2 w-auto h-auto p-1 col-start-1 row-start-2" src="./images/Artworks/R2C1.png" alt="" />
        <img className ="border-white border-2 w-auto h-auto p-1 col-start-2 row-start-2" src="./images/Artworks/R2C2.png" alt="" />
        <img className ="border-white border-2 w-auto h-auto p-1 col-start-3 row-startS-2" src="./images/Artworks/R2C3.png" alt="" />

        <img className ="border-white border-2 w-auto h-auto p-1 col-start-1 row-start-3" src="./images/Artworks/R3C1.png" alt="" />
        <img className ="border-white border-2 w-auto h-auto p-1 col-start-2 row-start-3" src="./images/Artworks/R3C2.png" alt="" />
        <img className ="border-white border-2 w-auto h-auto p-1 col-start-3 row-start-3" src="./images/Artworks/R3C3.png" alt="" />
      </div>
    </div>
    </center>
  );
}

function SectionFour(){
  return(
    <center>
      <div className = "bg-gradient-to-b from-sky-900  to-blue-900 w-full flex flex-col lg:flex-row m-auto items-center content-center p-32">
      <div className = "w-96 h-96 md:w-auto md:h-auto grid grid-rows-3 grid-cols-3 flex-row md:mr-20 gap-2">
        <img className ="w-auto h-auto p-1 col-start-1 row-start-1" src="./images/PubMats/R2C1-2.png" alt="" />
        <img className ="w-auto h-auto p-1 col-start-2 row-start-1" src="./images/PubMats/R2C2-2.webp" alt="" />
        <img className ="w-auto h-auto p-1 col-start-3 row-startS-" src="./images/PubMats/R2C3-2.png" alt="" />

        <img className ="border-white border-2 w-auto h-auto p-1 col-start-1 mt-10 md:mt-0 row-start-3" src="./images/PubMats/R3C1-2.png" alt="" />
        <img className ="border-white border-2 w-auto h-auto p-1 col-start-2 mt-10 md:mt-0 row-start-3" src="./images/PubMats/R3C2-2.png" alt="" />
        <img className ="border-white border-2 w-auto h-auto p-1 col-start-3 mt-10 md:mt-0 row-start-3" src="./images/PubMats/R3C3-2.png" alt="" />

        <img className ="border-white border-2 w-auto h-auto p-1 col-start-1 row-start-2" src="./images/PubMats/R1C1-2.jpg" alt="" />
        <img className ="border-white border-2 w-auto h-auto p-1 col-start-2 row-start-2" src="./images/PubMats/R1C2-2.jpg" alt="" />
        <img className ="border-white border-2 w-auto h-auto p-1 col-start-3 row-start-2" src="./images/PubMats/R1C3-2.jpeg" alt="" />
        
      </div>
      <div className = "p-1 text-white leading-7">
        <h1 className='text-center font-bold text-4xl p-16 font-seymour mt-20 lg:mt-0'>Logos and Pubmats</h1>
        <h3 className ='text-italic mb-8 text-justify'>
Aside from personal artworks, I have also done numerous logo and publication material work. These range from school-related to organization related works, which have served their purpose.

I have done class logos, organization logos, and official page posters and banners. I usually draw them myself but if ever time is of the essence, then I utilize quick tools such as Canva or other editing apps. 

I mainly started accepting services and gigs for this way back during the start of the pandemic and have continued to improve my skills there ever since. 
</h3>
      </div>
    </div>
    <div className = "bg-blue-900 text-center text-white">
    <button className = "bg-sky-500 p-2 m-1 hover:bg-sky-600 mt-9 mb-10 hover:scale-110 rounded-2xl"><a href="https://www.facebook.com/profile.php?id=100086811566717" target="blank">Visit my Art Page</a></button>
    </div>
    </center>
  );
}


function SectionFive(){
  return(
    <div id = "SecFive" className ="bg-gradient-to-b from-sky-200 from-70% to-sky-300 text-center p-5">
      <h1 className = "font-bold italic font-seymour text-3xl sm:text-4xl md:text-4xl">My Current Tech Stack</h1>
      <div className = "m-auto mt-10 mb-10 sm:mb-20 flex flex-row w-full items-center justify-center">
        <img className ="w-24 h-24 md:w-40 md:h-40 p-6" src="./images/HTML.png" alt="" />
        <img className ="w-24 h-24 md:w-40 md:h-40 p-6" src="./images/CSS.png" alt="" />
        <img className ="w-24 h-24 md:w-40 md:h-40 p-6" src="./images/Javascript.png" alt="" />
        <img className ="w-24 h-24 md:w-40 md:h-40 p-6" src="./images/React.webp" alt="" />
        <img className ="w-24 h-24 md:w-40 md:h-40 p-6" src="./images/Tailwind.png" alt="" />
      </div>
      <div className = "m-auto w-3/5 mb-12">
        <h3 className = "text-center text-1xl">
Aside from illustrative works, I have also been studying full stack development on the side, although at the moment, I am still on the front-end side of things and have yet to dive into the back-end. 

My current tech stack consists of the languages above. I am also familiar with C, Python, and very slight C++. I have made over 143 commits and 9 front-end side projects over the course of almost a year (2 months left). 

I am still in the learning phase for these things, but I can gain more experience as I grow further, learn new languages and frameworks, and build better and more practical projects.
</h3>
      </div>
    </div>
  )
}

function SectionSix(){
  return(
    <div className = "bg-sky-700 m-auto">
       <h1 className = "text-center p-12 text-5xl font-bold text-white font-seymour">MY WORKS</h1>
       <center>
          <div className = "w-auto h-auto grid grid-rows-3 grid-cols-3 flex-row items-center justify-center gap-5 mx-10">
            <img className ="border-white border-4 w-full h-full p-1 col-start-1 row-start-1" src="./images/Front-End Works/R1C1(2).png" alt="" />
            <img className ="border-white border-4 w-full h-full p-1 col-start-2 row-start-1" src="./images/Front-End Works/R1C2(2).png" alt="" />
            <img className ="border-white border-4 w-full h-full p-1 col-start-3 row-start-1" src="./images/Front-End Works/R1C3(2).png" alt="" />

            <img className ="border-white border-4 w-full h-full p-1 col-start-1 row-start-2" src="./images/Front-End Works/R2C1(2).png" alt="" />
            <img className ="border-white border-4 w-full h-full p-1 col-start-2 row-start-2" src="./images/Front-End Works/R2C2(2).png" alt="" />
            <img className ="border-white border-4 w-full h-full p-1 col-start-3 row-startS-2" src="./images/Front-End Works/R2C3(2).png" alt="" />

            <img className ="border-white border-4 w-full h-full p-1 col-start-1 row-start-3" src="./images/Front-End Works/R3C1(2).png" alt="" />
            <img className ="border-white border-4 w-full h-full p-1 col-start-2 row-start-3" src="./images/Front-End Works/R3C2(2).png" alt="" />
            <img className ="border-white border-4 w-full h-full p-1 col-start-3 row-start-3" src="./images/Front-End Works/R3C3(2).png" alt="" />
      </div>
        <button className = "bg-sky-500 p-3 m-16 hover:bg-sky-600 text-white hover:scale-110 rounded-2xl"><a href="https://github.com/SuillyCoder" target="blank">Visit my GitHub</a></button>
    </center>
    </div>
  );
}

function SectionSeven(){
  return(
    <div id = "SecSeven" className = "bg-sky-300">
      <h1 className ="text-center p-12 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-10 font-seymour">GET IN TOUCH</h1>
      <div className = "flex flex-row m-auto w-auto items-center justify-center mb-10">
        <a href="https://github.com/SuillyCoder" target="blank">
          <svg className = "w-24 h-24 sm:w-32 sm:h-32 hover:scale-110" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100086811566717" target="blank">
         <svg className = "w-24 h-24 sm:w-32 sm:h-32 hover:scale-110" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path></svg>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100086811566717" target="blank">
          <svg className = "w-24 h-24 sm:w-32 sm:h-32 hover:scale-110" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C17.6345 2 22.001 6.1265 22.001 11.7C22.001 17.2735 17.6345 21.4 12.001 21.4C11.0233 21.4023 10.0497 21.273 9.10648 21.0155C8.92907 20.9668 8.7403 20.9808 8.57198 21.055L6.58748 21.931C6.34398 22.0386 6.06291 22.018 5.83768 21.8761C5.61244 21.7342 5.47254 21.4896 5.46448 21.2235L5.40998 19.4445C5.40257 19.2257 5.30547 19.0196 5.14148 18.8745C3.19598 17.1345 2.00098 14.6155 2.00098 11.7C2.00098 6.1265 6.36748 2 12.001 2ZM5.99598 14.5365C5.71398 14.984 6.26398 15.488 6.68498 15.1685L9.84048 12.7735C10.0543 12.6122 10.3491 12.6122 10.563 12.7735L12.8995 14.5235C13.2346 14.7749 13.6596 14.8747 14.0716 14.7987C14.4836 14.7227 14.8451 14.4779 15.0685 14.1235L18.006 9.4635C18.288 9.016 17.738 8.512 17.317 8.8315L14.1615 11.2265C13.9476 11.3878 13.6528 11.3878 13.439 11.2265L11.1025 9.4765C10.7673 9.22511 10.3423 9.12532 9.93034 9.2013C9.51834 9.27728 9.15689 9.5221 8.93348 9.8765L5.99598 14.5365Z"></path></svg>
        </a>
        <a href="https://www.instagram.com/suillustrative/?hl=en" target="blank">
          <svg className = "w-24 h-24 sm:w-32 sm:h-32 hover:scale-110" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.0281 2.00073C14.1535 2.00259 14.7238 2.00855 15.2166 2.02322L15.4107 2.02956C15.6349 2.03753 15.8561 2.04753 16.1228 2.06003C17.1869 2.1092 17.9128 2.27753 18.5503 2.52503C19.2094 2.7792 19.7661 3.12253 20.3219 3.67837C20.8769 4.2342 21.2203 4.79253 21.4753 5.45003C21.7219 6.0867 21.8903 6.81337 21.9403 7.87753C21.9522 8.1442 21.9618 8.3654 21.9697 8.58964L21.976 8.78373C21.9906 9.27647 21.9973 9.84686 21.9994 10.9723L22.0002 11.7179C22.0003 11.809 22.0003 11.903 22.0003 12L22.0002 12.2821L21.9996 13.0278C21.9977 14.1532 21.9918 14.7236 21.9771 15.2163L21.9707 15.4104C21.9628 15.6347 21.9528 15.8559 21.9403 16.1225C21.8911 17.1867 21.7219 17.9125 21.4753 18.55C21.2211 19.2092 20.8769 19.7659 20.3219 20.3217C19.7661 20.8767 19.2069 21.22 18.5503 21.475C17.9128 21.7217 17.1869 21.89 16.1228 21.94C15.8561 21.9519 15.6349 21.9616 15.4107 21.9694L15.2166 21.9757C14.7238 21.9904 14.1535 21.997 13.0281 21.9992L12.2824 22C12.1913 22 12.0973 22 12.0003 22L11.7182 22L10.9725 21.9993C9.8471 21.9975 9.27672 21.9915 8.78397 21.9768L8.58989 21.9705C8.36564 21.9625 8.14444 21.9525 7.87778 21.94C6.81361 21.8909 6.08861 21.7217 5.45028 21.475C4.79194 21.2209 4.23444 20.8767 3.67861 20.3217C3.12278 19.7659 2.78028 19.2067 2.52528 18.55C2.27778 17.9125 2.11028 17.1867 2.06028 16.1225C2.0484 15.8559 2.03871 15.6347 2.03086 15.4104L2.02457 15.2163C2.00994 14.7236 2.00327 14.1532 2.00111 13.0278L2.00098 10.9723C2.00284 9.84686 2.00879 9.27647 2.02346 8.78373L2.02981 8.58964C2.03778 8.3654 2.04778 8.1442 2.06028 7.87753C2.10944 6.81253 2.27778 6.08753 2.52528 5.45003C2.77944 4.7917 3.12278 4.2342 3.67861 3.67837C4.23444 3.12253 4.79278 2.78003 5.45028 2.52503C6.08778 2.27753 6.81278 2.11003 7.87778 2.06003C8.14444 2.04816 8.36564 2.03847 8.58989 2.03062L8.78397 2.02433C9.27672 2.00969 9.8471 2.00302 10.9725 2.00086L13.0281 2.00073ZM12.0003 7.00003C9.23738 7.00003 7.00028 9.23956 7.00028 12C7.00028 14.7629 9.23981 17 12.0003 17C14.7632 17 17.0003 14.7605 17.0003 12C17.0003 9.23713 14.7607 7.00003 12.0003 7.00003ZM12.0003 9.00003C13.6572 9.00003 15.0003 10.3427 15.0003 12C15.0003 13.6569 13.6576 15 12.0003 15C10.3434 15 9.00028 13.6574 9.00028 12C9.00028 10.3431 10.3429 9.00003 12.0003 9.00003ZM17.2503 5.50003C16.561 5.50003 16.0003 6.05994 16.0003 6.74918C16.0003 7.43843 16.5602 7.9992 17.2503 7.9992C17.9395 7.9992 18.5003 7.4393 18.5003 6.74918C18.5003 6.05994 17.9386 5.49917 17.2503 5.50003Z"></path></svg>
        </a>
      </div>
      <div className = "p-16">
        <h3 className = "text-center text-xs sm:text-xl"><span className = "underline mr-5 ">23100354@usc.edu.ph</span>|<span className = "underline mx-5">suillustrative@gmail.com</span>|<span className = "underline ml-5">jlcbasuil@gmail.com</span></h3>
      </div>
    </div>
  );
}
export default function App(){
  return(
    <html className = "md:scroll-auto scroll-smooth font-josefin">
    <Example />
      <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <center>
       
        </center>
      <SectionFive />
        <SectionSix />
      <SectionSeven />
    </html>
  )
}


