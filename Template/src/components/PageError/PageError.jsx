import styles from './PageError.module.scss'

export const PageError = () => {
    return(
        <main className={styles.PageError}>
            <h1>404 Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <p><a href="/">Go back to the homepage</a></p>
        </main>
    )
}