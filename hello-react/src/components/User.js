import React, { useState } from 'react'

function User() {
    const [user, setUser] = useState({ name: "Muhammet", age: 21 })
    return (
        <div>
            <h2>User</h2>
            {user.name} {user.age}
            <br />
            <br />
            <div>
                <button onClick={() => setUser({ ...user, name: "Ahmet" })}>İsmi Değiştir</button>
                <button onClick={() => setUser({ ...user, age: 25 })}>Yaşı Değiştir</button>
            </div>

        </div>
    )
}

export default User