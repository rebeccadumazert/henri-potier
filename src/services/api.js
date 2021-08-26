import axios from 'axios'

export const getBooks = async () => {
  try {
    const booksList = await axios.get('https://henri-potier.techx.fr/books')
    return booksList.data
  } catch (error) {
    console.log(error)
  }
}

export const getCommercialOffers = async (booksIds) => {
  try {
    const commercialOffers = await axios.get(
      `https://henri-potier.techx.fr/books/${booksIds.join(
        ','
      )}/commercialOffers`
    )
    return commercialOffers.data
  } catch (error) {
    console.log(error)
  }
}
