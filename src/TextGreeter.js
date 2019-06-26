import React from 'react'

export function TextGreeter ({ name, setName }) {
  return (<div>
    <input type='text' value={name} onChange={e => setName(e.target.value)} />
  </div>)
}
