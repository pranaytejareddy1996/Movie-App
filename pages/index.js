import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests'


export default function Home({results}) {
  
  return (
    <div >
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Nav />
      
      <Results results={results}/>


    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  // console.log(requests[genre]?.url)
  // console.log(context.query);
  

  const url = requests[genre]?.url;
  

  const request = await fetch(`https://api.themoviedb.org/3${
    url ||   requests.fetchTrending.url}`
    ) 
    const data = await request.json();
    // console.log(data);

    return {
      props : {
        results : data.results
      }
    }
}