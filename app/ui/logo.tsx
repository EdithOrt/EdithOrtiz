import logo from '@/public/logo-eoc.svg'
import styles from '@/app/ui/styles/home.module.scss'

const Logo = () => {
  return (
    <img
      src={logo.src}
      className={styles.logo}
    />
  )
}

export default Logo
