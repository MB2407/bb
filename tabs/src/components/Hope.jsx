import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Hope() {
    const url = 'https://bindings.azurewebsites.net/api/HttpTrigger2?code=OmtN8p8816s6JWr8p0rV5fdOUOS-ROJMUuvqaiMC4BNoAzFuOQP35Q==&id=docs'
    const [bookmark, setBookmark] = useState(null)

    let content = null

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setBookmark(response.data)
                console.log(response.data)
            })
    }, [url])

    if (bookmark) {
        content =
            <div>
                <h1>{bookmark.id}</h1>
                <h1>{bookmark.url}</h1>
                <h1>{bookmark.a}</h1>
            </div>
    }

    return (
        <div>
            {content}
        </div>
    )
}

    export default Hope