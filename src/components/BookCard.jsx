import { useState } from 'react'

function BookCard({ book, onRemove, onStatusChange, onReset }) {
  const [sessionPages, setSessionPages] = useState(0)
  console.log('render BookCard', book.title, sessionPages)

  return (
    <div className="card">
      <h2>{book.title}</h2>
      <p className="author">{book.author}</p>
      <p className="pages">{book.pages} pages</p>

      <select value={book.status} onChange={(e) => onStatusChange(book.id, e.target.value)}>
        <option value="to-read">To read</option>
        <option value="reading">Reading</option>
        <option value="finished">Finished</option>
      </select>

      <p className="session">Session pages read: {sessionPages}</p>

      <div className="card-buttons">
        <button type="button" onClick={() => setSessionPages((sp) => sp + 10)}>
          +10 pages
        </button>
        <button type="button" onClick={() => onReset(book.id)}>
          Reset
        </button>
        <button type="button" className="remove" onClick={() => onRemove(book.id)}>
          Remove
        </button>
      </div>
    </div>
  )
}

export default BookCard
