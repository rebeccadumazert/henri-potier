export const findResultBySearch = (search, booksList) => {
  console.log(booksList.length, 'hey')
  const searchRegex = new RegExp(`/*${search}*`)
  const resultSearch = booksList.filter((book) => searchRegex.test(book.title))
  return resultSearch.map((result) => result.title)
}
