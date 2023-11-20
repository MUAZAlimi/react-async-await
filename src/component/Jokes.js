import useAxios from '../hooks/useAxios'
import axios from '../api/dadjokes' 

const Jokes = () => {
    const [joke, error, loading] = useAxios({
         axiosInstance : axios,
         method: 'GET',
         url: '/',
         requestConfig : {
                headers : {
                     'Content-Language': 'en-US',
                }
         }
    })
  return (
    <article>
      <h2>Random Dad Jokes.</h2>

      {loading && <p>loading...</p>}

      {!loading && error && <p className='errMsg'>{error}</p>}

      {!loading && !error && joke && <p>{joke?.joke}</p>}

      {!loading && !error && !joke && <p>No joke to display! 😃😀</p>}
    </article>
  )
}

export default Jokes
