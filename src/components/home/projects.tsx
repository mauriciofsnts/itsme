import React from 'react'
import styles from '../../pages/index.module.scss'
import { Button, Title } from '../'

type Props = {}

const Projects: React.FC<Props> = () => {
  return (
    <div className={styles.projectsContainer}>
      <Title>Projects</Title>

      <p>
        From front-end projects to golang madness, take a look at the projects
      </p>

      <div className={styles.filters}>
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
    </div>
  )
}

export default Projects
