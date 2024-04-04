import logo from '@/public/logo-eoc.svg'
import styles from '@/app/ui/styles/home.module.scss'

import Image from 'next/image'

const Logo = () => {
  return (
    <Image
      src={logo}
      className={styles.logo}
      width={500}
      height={500}
      alt='Edith Ortiz Logo'
    />
  )
}

export default Logo
