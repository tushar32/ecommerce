import React   from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <>
            <div> Marketing Home</div>

            <Link to="/sales" > Sales</Link>
        </>
    )
}

export default Home