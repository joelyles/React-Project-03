import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <main className='Missing'>
      <h1>Missing</h1>
      <p>Page Not Available</p>
      <p>
        <Link to='/'>Go to Homepage</Link>
      </p>
    </main>
  )
}

export default Missing