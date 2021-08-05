export const findResultBySearch = (search, booksList) => {
  const searchRegex = new RegExp(`/*${search}*`)
  const resultSearch = booksList.filter((book) => searchRegex.test(book.title))
  return resultSearch.map((result) => result.title)
}
