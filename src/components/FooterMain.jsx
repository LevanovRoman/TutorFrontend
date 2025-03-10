import styles from "./footermain.module.css";

export default function FooterMain() {
    return (
        <div className={styles.containerFooter}>
            <div className={styles.footerMain}>
                <p>© 2025 Все права защищены</p>
                <p>Контакт: info@example.com</p>
            </div>
        </div>
    )
}