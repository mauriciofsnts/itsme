import React from 'react'
import styles from '../../pages/index.module.scss'
import Card from '../card/card'
import Progress from '../progress/progress'
import Title from '../title/title'

type Props = {}

const Skills: React.FC<Props> = () => {
  return (
    <div className={styles.skillsContainer}>
      <div>
        <Title>Skills &#38; Experience</Title>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos.
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
    </div>
  )
}

export default Skills
