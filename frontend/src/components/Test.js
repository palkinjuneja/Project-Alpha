import React from 'react'
import currentUserProvider from './currentUserProvider'

function Test() {
    return (
        <div>
            <h1>In test app</h1>
            <currentUserProvider userId="123456"/>
        </div>
    )
}

export default Test
