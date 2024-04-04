import styles from '@/app/ui/styles/texts.module.scss'

const Title = ({ text }: { text: string }) => {
  return <p className={styles.title}>{text}</p>
}

export default Title
