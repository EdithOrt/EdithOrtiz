import styles from '@/app/ui/styles/texts.module.scss'

const Paragraph = ({
  text
}: {
  text: string
}) => {
  return (
    <p className={styles.paragraph}>{text}</p>
  )
}

export default Paragraph
