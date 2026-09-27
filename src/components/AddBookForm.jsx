import { useState } from 'react'

function AddBookForm({ onAdd }) {
  console.log('render AddBookForm')

  const [form, setForm] = useState({ title: '', author: '', pages: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.title.trim() || !form.author.trim()) return

    onAdd({ title: form.title.trim(), author: form.author.trim(), pages: Number(form.pages) || 0 })
    setForm({ title: '', author: '', pages: '' })
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
      />
      <input
        name="author"
        type="text"
        placeholder="Author"
        value={form.author}
        onChange={handleChange}
      />
      <input
        name="pages"
        type="number"
        min="0"
        placeholder="Pages"
        value={form.pages}
        onChange={handleChange}
      />
      <button type="submit">Add Book</button>
    </form>
  )
}

export default AddBookForm
