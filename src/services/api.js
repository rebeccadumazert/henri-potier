import axios from 'axios'

export const getBooks = async () => {
  try {
    const { data } = await axios.get('https://henri-potier.techx.fr/books')
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getCommercialOffers = async (booksIds) => {
  try {
    const { data } = await axios.get(
      `https://henri-potier.techx.fr/books/${booksIds.join(
        ','
      )}/commercialOffers`
    )
    return data
  } catch (error) {
    console.log(error)
  }
}
