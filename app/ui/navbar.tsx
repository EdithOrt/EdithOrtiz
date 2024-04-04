import ButtonText from './buttons/buttonText'
import ButtonIcon from './buttons/buttonIcon'

import styles from '@/app/ui/styles/navbar.module.scss'

export const Navbar = () => {
  return (
    <nav className={styles.main}>
      <div className={styles.home}>
        <ButtonText />
      </div>

      <section className={styles.containerMenu}>
        <div className={styles.containerButtons}>
          <ButtonIcon />
          <ButtonIcon />
        </div>

        <div className={styles.containerButtons}>
          <ButtonIcon />
          <ButtonIcon />
          <ButtonIcon />
          <ButtonIcon />
        </div>
      </section>
    </nav>
  )
}
