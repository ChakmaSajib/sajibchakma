import type { NextPage } from 'next'
import Head from 'next/head'
import { FaGithub } from 'react-icons/fa';

import { Article, BioData, Contact} from '../components';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sajib Chakma personal website</title>
        <meta name="description" content="Sajib Chakma personal website" />
      </Head>

      <main className={styles.main}>
        <BioData message = "Sajib Chakma" />
        <Article title = "Docker for beginner" description=' Docker is an initial part to be DevOps engineer' tag = "Docker, DevOps"/>
        <Contact title= "Connect with me" mediumName='Github' link="https://github.com/ChakmaSajib" iconComponent={<FaGithub/>}/>
        <span>Connect with me</span>
        <Contact mediumName='Github' link="https://github.com/ChakmaSajib" iconComponent={<FaGithub/>}/>
      </main>
  
    </div>
  )
}

export default Home
