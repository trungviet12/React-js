import {useState} from 'react'
import Content from './Content'
//Mounted/Unmounted
function App(){
  const [show, setShow] = useState(false)
  return (
    <div style={{padding: 20}}>
      <button onClick={() => setShow(!show)}>show</button>
      {show && <Content/>}

    </div>
  )

}



// var gifts =[
//   'cpu i9',
//   'ram 8gb',
//   '098'
// ]
// function App(){
//   var [gift,setGifft] = useState()
//   var randomGift = ()=>{
//     var index = Math.floor(Math.random()*gifts.length)
//     console.log(setGifft(gifts[index]));
//   }
//   return (
//     <div style={{padding: 32}}>
//       <h1>{gift||'Chưa có phần thưởng'}'</h1>
//       <button onClick={randomGift}>Lấy thưởng</button>
//     </div>
//   )
// }


// function App(){
  
// //todolist
// const [job,setJob] =useState('')
// const [jobs,setjobs] = useState(() =>{
//   const storageJobs=JSON.parse(localStorage.getItem('jobs'))
//   return storageJobs
// })
// const handleSumit =()=>{
//   setjobs(prev =>{
// const newJobs =  [...prev,job]

//           //save to local storage
//   const jsonJobs =JSON.stringify(newJobs)
//   localStorage.setItem('jobs',jsonJobs)
  
//   return newJobs
//   })
  
//   setJob('')
// }
// return (  
//       <div style={{padding: 32}}>
//         <input 
//         value={job}
//         onChange={e =>setJob(e.target.value)}
//          />

//         <button onClick={handleSumit}>Add</button>
//         <ul>
//           {jobs.map((job,index)=>(
//             <li key={index}>{job}</li>
//           ))}
//         </ul>
//       </div>
//     )




//   const [name, setName] = useState()
//   console.log(name);

//   return (  
//     <div style={{padding: 32}}>
//       <input
//       value={name}
//       onChange={e => setName(e.target.value)}>
//       </input>
//       <button onClick={()=>setName('Nguyễn Trung Việt')}>Change</button>
//     </div>
//   )
// }


export default App;
