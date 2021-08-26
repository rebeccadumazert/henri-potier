import Book from '../Book/Book'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import { useSelector } from 'react-redux'

function Results({ popUp, setPopUp }) {
  function closePopUp() {
    setPopUp(!popUp)
  }
  const results = useSelector((state) => state.resultsSearch)
  return (
    <div style={{ backgroundColor: '#efe9f6' }}>
      <HighlightOffIcon onClick={closePopUp} />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {results.length === 0 ? (
          <div>
            Le titre que vous recherchez n'est pas recensé dans la base de
            donnée.
          </div>
        ) : (
          results.map((book, i) => <Book key={i} book={book}></Book>)
        )}
      </div>
    </div>
  )
}

// #efe9f6

export default Results
