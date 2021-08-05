export const Results = ({ results }) => {
  console.log(results.length, 'kikou')
  const titlesResults = results.map((title, i) => <p key={i}>{title}</p>)
  return <div>{titlesResults}</div>
}
