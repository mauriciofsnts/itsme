import type { NextPage } from 'next'

import { Button, Card, Progress, Showcase } from '../components'
import styles from '../styles/home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.main}>
      <section className={styles.cover}>
        <div className={styles.cover__presentation}>
          <div>
            <h1>Mauricio Ferraz</h1>
            <h2>software engineer</h2>
          </div>

          <p>
            I&apos;m a software engineer with experience in software development on
            various platforms and languages. I have a passion for solving
            complex problems and working in a team to build scalable and
            efficient solutions.
          </p>

          <div>
            <button>Entre em contato</button>
          </div>
        </div>

        <div className={styles.cover__sideimg}>
          <img src="/imgs/person3.png" alt="Technology and Development" />
        </div>
      </section>

      <main className={styles.container}>
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
