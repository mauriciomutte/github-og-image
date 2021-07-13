import RepoFooter, { LanguagesData } from '../RepoFooter/RepoFooter'
import RepoInfo from '../RepoInfo/RepoInfo'

import styles from './RepoCard.module.css'

export type RepoCardProps = {
  userName: string
  userImg: string
  name: string
  description: string
  url: string
  contributions: number
  usedBy: number
  stars: number
  forks: number
  languages: LanguagesData[]
}

const RepoCard = (props: RepoCardProps) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.infos}>
            <h1 className={styles.title}>
              {props.userName}/<span>{props.name}</span>
            </h1>
            <p className={styles.description}>{props.description}</p>
          </div>

          <img
            className={styles.img}
            src={props.userImg || ''}
            alt={`${props.userName} image`}
          />
        </header>

        <main>
          <div className={styles.stats}>
            <RepoInfo
              name='contributors'
              title='Contributors'
              value={props.contributions}
            />
            <RepoInfo name='usedby' title='Used by' value={props.usedBy} />
            <RepoInfo name='stars' title='Stars' value={props.stars} />
            <RepoInfo name='forks' title='Forks' value={props.forks} />
          </div>
        </main>
      </div>
      <RepoFooter languages={props.languages} />
    </section>
  )
}

export default RepoCard
