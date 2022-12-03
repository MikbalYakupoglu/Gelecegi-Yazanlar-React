import React from 'react'
import PropTypes from 'prop-types'

function User({title, data, friends }) {
    return (
        <div>
            <div><h5>{title}</h5></div>
            <div>Ad : {data.name}</div>
            <div>Soyad : {data.surname}</div>
            <div>Yaş : {data.age}</div>
            <div>
                <h5>Arkadaşları</h5>
                {
                    friends.map((friend, i) => {
                        return <div key={i}>{friend}</div>
                    })
                }
            </div>
        </div>
    )
}

User.propTypes = {
    title : PropTypes.string.isRequired,
    data : PropTypes.exact({
        name : PropTypes.string,
        surname : PropTypes.string,
        age : PropTypes.number
    }),
    friends : PropTypes.arrayOf(PropTypes.string)
}

User.defaultProps = {
    title : "Kişi"
}

export default User