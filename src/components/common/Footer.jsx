import styles from "./footer.module.css";

export default function Footer() {

    return (
        <div>
            <footer className={styles.footer}>
                <span>Tutor Dev | All Right Reserved &copy; {new Date().getFullYear()} </span>
            </footer>
        </div>
    )
}