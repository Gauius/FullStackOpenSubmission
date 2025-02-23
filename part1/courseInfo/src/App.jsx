import ReactDOM from 'react-dom/client'

const Header = (props) =>{
console.log(props);
  return (
        <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  // console.log(props.parts[0]);
  return (
    <div>
      <p>{props.parts[0].name} {props.parts[0].exercises}</p>
      <p>{props.parts[1].name} {props.parts[1].exercises}</p>
      <p>{props.parts[2].name} {props.parts[2].exercises}</p>
    </div>
  )
}

const Total = (props) => {
  console.log(props.total)
  return (
    <div>
       <p>Number of exercises {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises } </p>
    </div>
  )
}

const App = () => {
  const course = {
  name: 'Half Stack application development',
  parts: [
    {
    name: 'Fundamentals of React',
    exercises: 10
    },
    {
    name: 'Using props to pass data',
    exercises: 7
    },
    {
    name: 'State of a component',
    exercises: 14
    }
  ]
}

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts} />
    </div>
  )
}

export default App
