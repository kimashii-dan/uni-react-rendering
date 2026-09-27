import { useState } from 'react'
import AddBookForm from './components/AddBookForm.jsx'
import Controls from './components/Controls.jsx'
import BookCard from './components/BookCard.jsx'

const initialBooks = [
  { id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien', pages: 310, status: 'finished', version: 0 },
  { id: 2, title: 'Dune', author: 'Frank Herbert', pages: 412, status: 'reading', version: 0 },
  { id: 3, title: 'Circe', author: 'Madeline Miller', pages: 393, status: 'to-read', version: 0 },
  { id: 4, title: 'Project Hail Mary', author: 'Andy Weir', pages: 476, status: 'reading', version: 0 },
  { id: 5, title: 'Educated', author: 'Tara Westover', pages: 334, status: 'to-read', version: 0 },
]

function App() {
  console.log('render App')

  const [books, setBooks] = useState(initialBooks)
  const [filter, setFilter] = useState('all')

  function addBook({ title, author, pages }) {
    const newId = Math.max(0, ...books.map((b) => b.id)) + 1
    setBooks([...books, { id: newId, title, author, pages, status: 'to-read', version: 0 }])
  }

  function removeBook(id) {
    setBooks(books.filter((b) => b.id !== id))
  }

  function changeStatus(id, status) {
    setBooks(books.map((b) => (b.id === id ? { ...b, status } : b)))
  }

  function resetBook(id) {
    setBooks(books.map((b) => (b.id === id ? { ...b, version: b.version + 1 } : b)))
  }

  function reverseList() {
    setBooks([...books].reverse())
  }

  const filteredBooks = filter === 'all' ? books : books.filter((b) => b.status === filter)

  return (
    <div className="page">
      <h1>Reading List</h1>

      <AddBookForm onAdd={addBook} />
      <Controls filter={filter} onFilterChange={setFilter} onReverse={reverseList} />

      {filteredBooks.length === 0 ? (
        <p className="empty">No books match this filter</p>
      ) : (
        <div className="grid">
          {filteredBooks.map((book) => (
            <BookCard
              key={`${book.id}-${book.version}`}
              book={book}
              onRemove={removeBook}
              onStatusChange={changeStatus}
              onReset={resetBook}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default App
