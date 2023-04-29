import React, { useState } from 'react'

export default function HooksObject() {
    const [name, setName] = useState({firstname: '', lastname:''})
  return (
    <form>
        <div>
            <input
            type = "text"
            value={name.firstname}
            onChange={e=>setName({...name, firstname: e.target.value})}>
            </input>
            <input
            type = "text"
            value={name.lastname}
            onChange={e=>setName({...name, lastname: e.target.value})}>
            </input>
        </div>
        <div>
            <h2>
                Your First name is - {name.firstname}
            </h2>
            <h2>
                Your Last name is - {name.lastname}
            </h2>
        </div>
    </form>
  )
}
