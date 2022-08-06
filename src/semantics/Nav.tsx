import styles from './Nav.module.css'

interface Props {
  logo: string
}

export default function Nav(props: Props) {
  return (
    <div className={styles.navigation} role='navigation'>
      <header className='Nav-header'>
        <img src={props.logo} className={styles.AppLogo} alt='logo' />
      </header>
      <ul className={styles.navigationUnorderedList}>
        <li className={styles.navigationUnorderedListItem}>
          <a href='page1.html'>Navigate to section 1</a>
        </li>
        <li className={styles.navigationUnorderedListItem}>
          <a href='page2.html'>Navigate to section 2</a>
        </li>
        <li className={styles.navigationUnorderedListItem}>
          <a href='page3.html'>Navigate to section 3</a>
        </li>
        <li className={styles.navigationUnorderedListItem}>
          <a href='page4.html'>Navigate to section 4</a>
        </li>
      </ul>
    </div>
  )
}
