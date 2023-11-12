"use client"
import React, { useState } from 'react'

const page = () => {

  const [desc, setdesc] = useState("")
  const [title, settitle] = useState("")
  const [MainTask, setMainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...MainTask , {title,desc}])
    settitle("")
    setdesc("")
  }
  const deleteHandler=(i)=>{
    let copyTask = [...MainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)
  }
  let renderTask = <h2>No Task Available</h2>;
  
    if(MainTask.length>0){
      renderTask = MainTask.map((t,i) => {
      return (
        <li className='flex items-center justify-between mb-5'>
          <div className='flex  items-center justify-between mb-5 w-2/3'>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h6 className='text-xl font-semibold'>{t.desc}</h6>
           </div>
           <button onClick={()=>{
            {deleteHandler()}
           }}
            className='bg-red-400 text-white rounded font-bold px-4 py-2'>Delete</button>
        </li>
        );
   })}
  
  return (
    <>
      <h1 className='bg-black  text-white text-5xl  font-bold text-center p-5'>Adarsh's Todo-List</h1>
      <form onSubmit={submitHandler}>
        <input
          className='text-2xl border-zinc-900   px-4 py-2 border-4 m-10'
          type='text' placeholder='Enter Task here'
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }} />
        <input
          className='text-2xl border-zinc-900 px-4 py-2 border-4 m-5'
          type='text' placeholder='Enter Description here'
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }} />
        <button className='text-white bg-black  rounded text-2xl px-5 py-2 m-5'>Add here</button>
      </form>
      <hr/>
      <div className='p-8 bg-slate-200'> 
       <ul>
          {renderTask}
       </ul>
      </div>
    </>
  )
}

export default page