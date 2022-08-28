import type { NextPage } from 'next'
import Head from 'next/head'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

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
        <span>Hi, this is Sajib Chakma</span>
        <BioData message = "Sajib Chakma" />

        <span>Check my latest article posts</span>
        <Article title = "Docker for beginner" description=' Docker is an initial part to be DevOps engineer' tag = "Docker, DevOps"/>
        <span>Connect with me</span>
        <Contact mediumName='Github' link="https://github.com/ChakmaSajib" iconComponent={<FaGithub/>}/>
        <Contact mediumName='Linkedin' link="https://github.com/ChakmaSajib" iconComponent={<FaLinkedin/>}/>

        <span>Language and Tools</span>
      </main>
  
    </div>
  )
}

export default Home
