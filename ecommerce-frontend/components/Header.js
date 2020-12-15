import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Header.module.css'

export default () => {
    const router = useRouter()
    const isHome = router.pathname === "/"
    const goBack = (event) => {
        event.preventDefault()
        router.back()
    }
    return (
        <header className={styles.nav}>
            {!isHome && 
                <div className={styles.back}>
                    <a href="#" onClick={goBack}>{"<"}back</a>
                </div>
            }
            <div className={styles.title}>
                <Link href="/">
                    <a>
                        <h1>The eCommerce</h1>
                    </a>
                </Link>
            </div>
        </header>
    )
}