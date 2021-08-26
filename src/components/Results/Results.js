import Book from '../Book/Book'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import styles from './Results.module.css'
import { useSelector } from 'react-redux'

function Results({ popUp, setPopUp }) {
  function closePopUp() {
    setPopUp(!popUp)
  }
  const results = useSelector((state) => state.resultsSearch)
  const { resultsContainer, resultsBC } = styles
  return (
    <div className={resultsBC}>
      <HighlightOffIcon onClick={closePopUp} />
      <div className={resultsContainer}>
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

export default Results
