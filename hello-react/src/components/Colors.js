import React, { useState } from 'react'

function Colors() {
    const [colors, setColors] = useState(["Kırmızı", "Yeşil","Mavi"])
    const handleClick = () => setColors([...colors, Math.random()])
    return (
        <div>
            <h2>Renkler</h2>
            {
                colors.map((color, i) => (
                    <div key={i}>{color}</div>
                ))
            }
            <button onClick={() => setColors([...colors, "Gri"])}>Gri Ekle</button>
            <button onClick={handleClick}>Sayı Ekle</button>
        </div>
    )
}

export default Colors