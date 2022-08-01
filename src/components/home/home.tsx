import React from 'react'
import Image from 'next/image'

import styles from '../../pages/index.module.scss'

type Props = {}

const Home: React.FC<Props> = () => {
  return (
    <div className={styles.homeMainContainer}>
      <div>
        <h1>Mauricio</h1>
        <h3>Ferraz</h3>
      </div>

      <div>
        <Image
          src="/imgs/home-img.png"
          alt="Technology and Development"
          width="700px"
          height="600px"
        />
      </div>
    </div>
  )
}

export default Home
