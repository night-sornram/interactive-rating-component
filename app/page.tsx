"use client"

import React, { useState } from 'react';


export default function Home() {

  const [value,setValue] = useState(0);
  const [show,setShow] = useState(false);

  return (

    <div className='flex flex-col justify-center items-center w-screen h-screen'>
      {!show && (
        <div className=' w-5/6 sm:w-2/3  lg:w-1/3 bg-gray-800 rounded-lg p-10'>
        <div className=" bg-gray-600 p-3 w-10 rounded-full">
          <svg  width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/></svg>
        </div>
        <div className=' text-white mt-5 font-bold text-2xl'>
          How did we do? 
        </div>
        <div className=' text-gray-100 text-sm mt-5'>
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
        </div>
        <div className='flex flex-row items-center justify-around mt-10 text-white'>
          <button onClick={()=>{setValue(1)}} className={ value === 1 ? "s-b" : "us-b"}>1</button>
          <button onClick={()=>{setValue(2)}} className={ value === 2 ? "s-b" : "us-b"}>2</button>
          <button onClick={()=>{setValue(3)}} className={ value === 3 ? "s-b" : "us-b"}>3</button>
          <button onClick={()=>{setValue(4)}} className={ value === 4 ? "s-b" : "us-b"}>4</button>
          <button onClick={()=>{setValue(5)}} className={ value === 5 ? "s-b" : "us-b"}>5</button>
          
        </div>
        <div className='mt-10'>
          <button onClick={()=>{{value === 0 ? alert("Please Select") : setShow(true)}}}  className=' bg-orange-400 w-full rounded-full text-white font-bold h-10 '> SUBMIT</button>
        </div>
      </div>
      )}
      {show && (
        <div className='flex flex-col justify-center items-center w-1/3 bg-gray-800 rounded-lg p-10 '>
          <div className='my-5'>
            <svg width="162" height="108" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M30 93.744h-.044a23.456 23.456 0 0 1-1.61-.189.543.543 0 0 1 .155-1.076c.52.076 1.04.135 1.563.178a.538.538 0 0 1-.043 1.076l-.022.01Zm5.37-.205a.538.538 0 0 1-.08-1.076 19.51 19.51 0 0 0 1.54-.306.536.536 0 0 1 .645.403.538.538 0 0 1-.397.646c-.537.129-1.074.236-1.611.323l-.097.01Zm-12.137-1.312a.536.536 0 0 1-.183-.033 24.346 24.346 0 0 1-1.525-.608.539.539 0 0 1 .424-.99c.483.21.983.404 1.472.587a.538.538 0 0 1-.188 1.044Zm18.759-.829a.538.538 0 0 1-.242-1.022c.467-.226.934-.479 1.39-.742a.536.536 0 1 1 .538.93c-.478.275-.967.538-1.45.78a.536.536 0 0 1-.258.054h.022Zm-24.994-2.292a.536.536 0 0 1-.29-.08c-.457-.29-.913-.597-1.36-.91a.536.536 0 1 1 .612-.882c.436.307.876.597 1.322.883a.538.538 0 0 1-.284.99Zm30.772-1.544a.537.537 0 0 1-.408-.193.539.539 0 0 1 .06-.759l.117-.124c.355-.306.715-.624 1.074-.957a.537.537 0 1 1 .73.79c-.375.345-.74.673-1.106.985l-.123.102a.537.537 0 0 1-.344.156Zm-36.326-2.69a.537.537 0 0 1-.36-.14c-.402-.37-.8-.747-1.18-1.124a.539.539 0 0 1 .751-.769c.376.371.763.737 1.155 1.076a.538.538 0 0 1 .032.764.537.537 0 0 1-.398.194Zm41.305-2.21a.537.537 0 0 1-.398-.899c.355-.393.715-.79 1.074-1.2a.537.537 0 1 1 .806.71c-.365.415-.725.818-1.074 1.21a.537.537 0 0 1-.408.152v.026ZM6.724 79.723a.537.537 0 0 1-.424-.204 41.79 41.79 0 0 1-.989-1.308.539.539 0 0 1 .124-.753.536.536 0 0 1 .746.124c.312.425.629.85.962 1.27a.539.539 0 0 1-.42.871Zm50.579-2.383a.539.539 0 0 1-.419-.877c.338-.414.677-.828 1.015-1.253a.537.537 0 1 1 .838.672l-1.02 1.259a.537.537 0 0 1-.414.199ZM2.9 73.887a.537.537 0 0 1-.473-.312c-.257-.5-.499-1-.714-1.485a.539.539 0 0 1 .685-.72c.133.052.24.154.298.285.21.462.44.946.687 1.425a.539.539 0 0 1-.483.786v.021Zm58.753-2.028a.537.537 0 0 1-.424-.866l.988-1.275a.537.537 0 1 1 .848.656l-.988 1.275a.537.537 0 0 1-.424.188v.022ZM.682 67.286a.537.537 0 0 1-.537-.462A17.06 17.06 0 0 1 0 65.16a.538.538 0 1 1 1.074 0c.018.519.063 1.036.134 1.55a.539.539 0 0 1-.462.607l-.064-.032Zm65.24-.973a.537.537 0 0 1-.43-.867l.984-1.28a.536.536 0 0 1 .853.65l-.993 1.265a.537.537 0 0 1-.414.21v.022Zm88.49-2.96a.724.724 0 0 1-.15 0 .537.537 0 0 1-.366-.666c.134-.474.28-.99.424-1.544a.538.538 0 0 1 .655-.388.537.537 0 0 1 .382.662c-.145.538-.29 1.076-.43 1.565a.537.537 0 0 1-.515.372Zm-84.247-2.592a.536.536 0 0 1-.424-.867l.983-1.28a.54.54 0 1 1 .854.662l-.989 1.275a.537.537 0 0 1-.413.183l-.01.027Zm-68.924-.382a.536.536 0 0 1-.156 0 .538.538 0 0 1-.355-.673 21.47 21.47 0 0 1 .537-1.565.537.537 0 1 1 .994.403c-.193.49-.37.985-.537 1.474a.537.537 0 0 1-.473.334l-.01.027Zm154.782-3.863a.311.311 0 0 1-.102 0 .538.538 0 0 1-.43-.624c.097-.538.188-1.044.28-1.582a.545.545 0 1 1 1.073.178c-.09.538-.182 1.076-.279 1.614a.537.537 0 0 1-.542.414ZM74.46 55.209a.537.537 0 0 1-.424-.872l1.004-1.27a.537.537 0 1 1 .838.673l-.999 1.264a.537.537 0 0 1-.408.205h-.01ZM4.436 54.165a.539.539 0 0 1-.43-.855c.323-.436.666-.872 1.02-1.297a.537.537 0 1 1 .822.694 22.92 22.92 0 0 0-.977 1.237.537.537 0 0 1-.435.221Zm74.408-4.417a.539.539 0 0 1-.414-.877l1.026-1.248a.537.537 0 1 1 .843.667l-1.02 1.243a.537.537 0 0 1-.435.215Zm78.124-.161h-.043a.538.538 0 0 1-.494-.576c.043-.538.075-1.076.107-1.614a.538.538 0 0 1 .564-.538c.295.018.52.27.505.565a54.253 54.253 0 0 1-.107 1.614.538.538 0 0 1-.532.549ZM9.28 49.13a.537.537 0 0 1-.338-.958c.8-.646 1.316-.99 1.337-1.006a.536.536 0 0 1 .59.898s-.499.334-1.25.942a.536.536 0 0 1-.35.124h.011Zm74.075-4.74a.537.537 0 0 1-.403-.888c.35-.408.704-.817 1.074-1.22a.537.537 0 1 1 .806.71c-.355.403-.71.806-1.074 1.215a.537.537 0 0 1-.414.183h.01Zm73.742-1.797a.537.537 0 0 1-.537-.505 54.325 54.325 0 0 0-.118-1.614.54.54 0 1 1 1.074-.097c.048.538.091 1.076.118 1.614 0 .285-.221.52-.505.538l-.032.064Zm-69.064-3.416a.537.537 0 0 1-.392-.904c.365-.398.735-.79 1.106-1.178a.536.536 0 0 1 .779.737l-1.074 1.173a.537.537 0 0 1-.44.172h.02Zm68.092-3.502a.537.537 0 0 1-.537-.409 22.668 22.668 0 0 0-.408-1.533.539.539 0 0 1 1.03-.307c.151.538.296 1.05.425 1.587a.539.539 0 0 1-.398.651l-.112.01Zm-63.221-1.512a.537.537 0 0 1-.376-.92l1.165-1.13a.537.537 0 1 1 .763.76c-.387.365-.768.741-1.155 1.118a.537.537 0 0 1-.419.172h.022Zm5.14-4.745a.537.537 0 0 1-.355-.941l1.235-1.076a.539.539 0 1 1 .693.828c-.408.34-.817.689-1.225 1.039a.537.537 0 0 1-.37.15h.021Zm55.197-.575c-.247-.468-.505-.931-.779-1.378a.537.537 0 1 1 .918-.554c.285.463.537.947.811 1.431a.539.539 0 0 1-.478.791.537.537 0 0 1-.472-.29ZM103.5 25.055a.539.539 0 0 1-.322-.974c.44-.322.88-.634 1.32-.946a.537.537 0 0 1 .845.394.54.54 0 0 1-.227.488l-1.3.93a.536.536 0 0 1-.338.108h.022Zm46.132-1.56a.537.537 0 0 1-.381-.161c-.359-.359-.74-.717-1.144-1.076a.536.536 0 1 1 .709-.807c.408.36.81.742 1.197 1.135a.539.539 0 0 1 0 .759.537.537 0 0 1-.403.15h.022Zm-40.279-2.28a.537.537 0 0 1-.274-1.001c.473-.275.946-.538 1.418-.797a.54.54 0 0 1 .81.474.542.542 0 0 1-.273.468c-.467.253-.929.538-1.39.785a.536.536 0 0 1-.344.07h.053Zm34.737-1.894a.504.504 0 0 1-.258-.07c-.451-.248-.924-.49-1.407-.716a.539.539 0 0 1 .462-.974c.499.237.988.49 1.46.748a.538.538 0 0 1-.257 1.012Zm-28.49-1.195a.537.537 0 0 1-.2-1.038c.505-.204 1.01-.398 1.52-.581a.537.537 0 0 1 .366 1.011c-.495.178-.989.366-1.483.57a.536.536 0 0 1-.247.038h.043Zm22.045-1.452a.777.777 0 0 1-.156 0c-.505-.15-1.02-.29-1.53-.41a.553.553 0 0 1 .252-1.075c.537.129 1.074.269 1.611.425a.542.542 0 0 1-.15 1.076l-.027-.016Zm-15.456-.597a.537.537 0 0 1-.118-1.066c.537-.107 1.074-.21 1.61-.29a.543.543 0 0 1 .59.735.544.544 0 0 1-.423.34c-.537.082-1.036.178-1.557.286a.365.365 0 0 1-.102-.005Zm8.555-.603h-.038a32.41 32.41 0 0 0-1.579-.06.538.538 0 0 1 0-1.075c.537 0 1.074.027 1.638.06a.538.538 0 0 1-.032 1.075h.01Z" fill="#E6E6E6"/><path fill="#39475F" d="M119.847 100.221H58.146L70.332.793h55.025l5.747 7.601z"/><path fill="#61728D" d="M113.172 100.221H51.465L63.651.793h61.706z"/><path fill="#181F27" d="M110.132 81.354H58.576l8.791-71.695h51.557z"/><path fill="#1E252E" d="m92.743 50.055 14.897.177-.29 2.308-14.607-.252z"/><path fill="#39475F" d="m51.465 100.221 7.422 6.864 60.037.915.923-7.779z"/><path d="M99.096 29.058s2.572.183 3.888 5.03c1.316 4.847.865 18.377.865 18.377l-11.096-.177s-5.537-20.137 6.343-23.23Z" fill="#2D394B"/><path fill="#FC7614" d="M5.42 32.843 45.778 0l21.18 26.119L26.603 58.96z"/><path fill="#FFF" d="M27.49 21.931 45.56 7.226l3.497 4.313-18.07 14.706z"/><path d="m25.272 45.175 5.338-4.345a2.772 2.772 0 0 1 3.902.404 2.781 2.781 0 0 1-.404 3.91l-5.338 4.344a2.772 2.772 0 0 1-3.903-.404 2.781 2.781 0 0 1 .405-3.91ZM37.33 35.365l16.89-13.743a2.772 2.772 0 0 1 3.902.404 2.781 2.781 0 0 1-.405 3.909L40.83 39.679a2.772 2.772 0 0 1-3.903-.404 2.781 2.781 0 0 1 .405-3.91Z" fill="#FFF" opacity=".46"/><ellipse fill="#FFF" opacity=".3" cx="17.937" cy="33.636" rx="3.673" ry="3.68"/><ellipse fill="#FFF" opacity=".3" cx="21.664" cy="30.284" rx="3.673" ry="3.68"/><path d="M99.096 29.058s-5.838 2.103-3.803 18.581c1.493 12.073-3.55 28.056-11.004 28.25-7.454.193-21.202-.463-21.202-.463s7.159-18.56 5.676-34.145a14.786 14.786 0 0 1 .763-6.456c.87-2.373 2.487-4.842 5.494-5.245 6.004-.818 24.076-.522 24.076-.522Z" fill="#BAD6FA"/><path d="m58.957 76.63 26.342-.537s-4.017-3.992-4.27-14.154l-36.234.538a31.494 31.494 0 0 0 2.841 7.531 12.547 12.547 0 0 0 11.32 6.623Z" fill="#546F8D"/><path fill="#2D394B" d="m78.21 14.834-.918 6.041h26.621l.806-6.041z"/><path d="M85.54 86.19c-2.872-2.517-7.416-2.022-9.446 1.222a4.955 4.955 0 0 0-.8 2.647c0 3.98 2.744 6.59 8.227 5.492 4.184-.839 5.779-6.073 2.02-9.36Z" fill="#FFF" opacity=".48"/><ellipse fill="#FC7614" cx="147.188" cy="81.542" rx="14.812" ry="14.837"/><path d="M73.731 35.75a.537.537 0 0 1-.038-1.076c.113 0 11.343-.828 17.363-.29a.54.54 0 0 1-.096 1.076c-5.908-.538-17.079.274-17.186.285l-.043.005Zm-.891 7.279a.538.538 0 0 1-.038-1.076c.113 0 11.342-.828 17.363-.29a.54.54 0 0 1-.097 1.076c-5.907-.538-17.073.28-17.185.285l-.043.005Zm-.102 7.564a.538.538 0 0 1-.043-1.076c.112 0 11.347-.829 17.362-.29a.54.54 0 0 1-.096 1.075c-5.908-.538-17.073.28-17.186.286l-.037.005Zm-.715 7.564a.537.537 0 0 1-.037-1.076c.112 0 11.342-.829 17.362-.285a.54.54 0 0 1-.096 1.076c-5.908-.538-17.073.28-17.186.285h-.043Z" fill="#FFF"/></g></svg>
          </div>
          <div className=' my-5 text-orange-400 p-2 rounded-full bg-gray-700 text-sm mt-5'>
            You selected out {value} of 5
          </div>
          <div className='my-5 text-white mt-5 font-bold text-2xl'>
          Thank you! 
          </div>
          <div className='my-5 mx-10 text-gray-100 text-sm mt-5'>
          We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
          </div>
        </div>

      )}
      
    </div>
  );
}
