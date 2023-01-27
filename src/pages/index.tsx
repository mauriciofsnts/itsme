import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Button, Card, Progress, Showcase } from '../components'

import styles from '../styles/home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mauricio Ferraz</title>
        <meta name="description" content="Mauricio Ferraz - Software engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.header__social}>
          <a
            href="https://github.com/mauriciofsnts"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={'/imgs/github.svg'}
              alt="github"
              width={32}
              height={32}
            />
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

          <a
            href="mauriciofsnts@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={'/imgs/mail.svg'} alt="mail" width={32} height={32} />
          </a>
        </div>
      </header>

      <main className={styles.container}>
        <section className={styles.container__cover}>
          <div>
            <h1>Mauricio</h1>
            <h2>Ferraz</h2>
          </div>

          <div>
            <Image
              src="/imgs/home-img.png"
              alt="Technology and Development"
              width="700px"
              height="600px"
            />
          </div>
        </section>

        <section className={styles.container__skills}>
          <div>
            <h2>Skills &#38; Experience</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos.
            </p>

            <p>
              Praesent auctor purus luctus enim egestas, ac scelerisque ante
              pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl.
            </p>
          </div>

          <aside>
            <div>
              <Progress title="Front end" value={80} />
              <Progress title="Back end" value={30} />
              <Progress title="Design" value={40} />
              <Progress title="ReactJS" value={70} />
            </div>

            <Card
              title="Frontend developer"
              subtitle="_fourcicle"
              span="2019 - 2020"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
            />
          </aside>
        </section>

        <section className={styles.container__projects}>
          <h2>Projects</h2>

          <p>
            From front-end projects to golang madness, take a look at the
            projects
          </p>

          <div className={styles.container__projects__filters}>
            <Button variant="outlined">Show All</Button>
            <Button>Web components</Button>
            <Button>HTML5</Button>
            <Button>ReactJS</Button>
            <Button>SocketIO</Button>
            <Button>Ux Design</Button>
          </div>

          <small>
            Showing all projects. Use the filter to list them by skill or
            technology.
          </small>

          <div className={styles.container__projects__showcase}>
            <Showcase />
            <Showcase invert />
            <Showcase />
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
