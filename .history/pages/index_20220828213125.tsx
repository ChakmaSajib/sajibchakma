import type { NextPage } from 'next'
import Head from 'next/head'

import { Article, BioData} from '../components';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sajib Chakma personal website</title>
        <meta name="description" content="Sajib Chakma personal website" />
      </Head>

      <main className={styles.main}>
        <BioData/>
        <Article/>
      </main>
  
    </div>
  )
}

export default Home
