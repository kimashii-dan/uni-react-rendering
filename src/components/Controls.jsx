function Controls({ filter, onFilterChange, onReverse }) {
  console.log('render Controls')

  return (
    <div className="controls">
      <select value={filter} onChange={(e) => onFilterChange(e.target.value)}>
        <option value="all">All</option>
        <option value="to-read">To read</option>
        <option value="reading">Reading</option>
        <option value="finished">Finished</option>
      </select>
      <button type="button" onClick={onReverse}>
        Reverse
      </button>
    </div>
  )
}

export default Controls
