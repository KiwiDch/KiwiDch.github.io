import styles from '../styles/Header.module.css'

function Header(prop) {
    return (
        <header className={styles.Header}>
            <div>
                <h1>D.</h1>
            </div>
            <nav>
                <ul>
                    {prop.sections.map(([object, link], i) => <li id={i}><a href={link}>{object}</a></li>)}
                </ul>
            </nav>
            <p className={styles.Nightmode}>placerholder</p>
        </header>
    );
}

export default Header;