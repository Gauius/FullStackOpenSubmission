import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Default Function
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>

//       <div>

//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// {JavaScript}
// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20
//   console.log(now, a+b);

//   return (
//     <div>
//       <p>
//         <h1>Hello World, it is now {now.toString()}</h1>
//       </p>
//       <p>
//         {a} plus {b} is {a+b}
//       </p>
//     </div>
//   )
// }


// Sample of making components(Hello) and used mulltiple times
// const Hello = () =>{
//   return (
//     <div>
//       <p>Hello World</p>
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello />
//       <Hello />
//       <Hello />
//     </div>
//   )
// }

// components with paramter(props)
// const Hello = (props) =>{
//   return (
//     <div>
//       <p>Hello {props.name}</p>
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name='George'/>
//       <Hello name='Daisy' />
//       <Hello name='My3rdName' />
//     </div>
//   )
// }


// DO NOT RENDER OBJECT
// const Hello = () =>{
//   console.log(props); // logging in console MAKE IT A HABBIT!!!!!!

//   return (
//     <div>
//       <p>Hello {props.name}, you are {props.age} years old</p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name='Maya'age={26+10} />
//       <Hello name={name} age={age} />

//     </div>
//   )
// }


// DO NOt Render Object: Objects not valid.. error in console
// const App = () => {
//   const friends = [
//     {name:'Peter', age:4},
//     {name:'Maya', age: 10}
//   ]
//   return (
//     <div>
//       <p>
//        {friends[0]}
//       </p>
//       <p>
//        {friends[1]}
//       </p>
//     </div>
//   )
// }

// Render only primitive Objects
const App = () => {
  const friends = [
    {name:'Peter', age:4},
    {name:'Maya', age: 10}
  ]
  return (
    <div>
      <p>
       {friends[0].name}
       {friends[0].age}
      </p>
      <p>
      {friends[1].name}
      {friends[1].age}
      </p>
    </div>
  )
}
export default App
