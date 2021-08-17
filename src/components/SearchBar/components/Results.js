export const Results = ({ results }) => {
  console.log(results.length, 'kikou')
  const titlesResults = results.map((title, i) => <p key={i}>{title}</p>)
  console.log(results)
  return (
    // <div>
    //   {results.length === 0
    //     ? 'Aucun résultat ne correspond à votre recherche :('
    //     : { titlesResults }}
    // </div>
    <div>{titlesResults}</div>
  )
}
