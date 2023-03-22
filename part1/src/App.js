const Header=(props)=>(
  <>
  <h1>{props.course}</h1>
  </>
)
// const Parts=(props)=>(
//   <>
//    <p>
//     {props.parts.name} {props.parts.exercises}
//     </p>
//   </>
// )
// const Content=(props)=>(
//       <>
      
//       <Parts parts={props.part1}/>
//       <Parts parts={props.part2}/>
//       <Parts parts={props.part3}/>
//   </>
// )
const Part=({part})=>(
  <p>
    {part.name} {part.exercises}
  </p>
)
// const Content=({parts})=>{
//   return(
//   <>{parts.forEach(part =>(<Part part={part}/>))}</>
//   )
// }
const Content = ({ parts }) => (
    <>
      {parts.map((part) => (
        <Part key={part.name} part={part} />
      ))}
    </>
  )

// const Total=({parts})=>{
//   let sum=0
//   parts.forEach(v=>sum+=v.exercises)
//   return(<div><p>Number of exercises {sum}</p></div>)
// }
const Total = ({ parts }) => {
  const sum = parts.reduce((total, part) => total + part.exercises, 0);
  return <div><p>Number of exercises {sum}</p></div>;
};


const App=()=>{
  const course='Half Stack application development'
  const parts = [
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

  return(
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}
export default App
