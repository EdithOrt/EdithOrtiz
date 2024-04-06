import styles from '@/app/ui/styles/home.module.scss'
import Logo from './logo'

const HomeContainer = () => {
  return (
    <div
      className={styles.main}
      id='home'
    >
      <Logo />
    </div>
  )
}

export default HomeContainer
