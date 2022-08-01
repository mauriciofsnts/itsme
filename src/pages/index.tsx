import type { NextPage } from 'next'
import Head from 'next/head'

import styles from './index.module.scss'

import * as Part from '../components/home/'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Part.Home />

      <Part.Skills />

      <Part.Projects />

      <Part.Contact />
    </div>
  )
}

export default Home