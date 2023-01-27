import React from 'react'
import Image from 'next/image'
import styles from './contact.module.scss'

const Contact: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__social}>
        <a
          href="https://github.com/mauriciofsnts"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={'/imgs/github.svg'} alt="github" width={32} height={32} />
        </a>

        <a
          href="https://www.linkedin.com/in/mauriciofsnts/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={'/imgs/linkedin.svg'}
            alt="linkedin"
            width={32}
            height={32}
          />
        </a>

        <a href="mauriciofsnts@gmail.com" target="_blank" rel="noreferrer">
          <Image src={'/imgs/mail.svg'} alt="mail" width={32} height={32} />
        </a>
      </div>
    </header>
  )
}

export default Contact
