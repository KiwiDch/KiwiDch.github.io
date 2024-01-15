import styles from '../styles/Button.module.css'

function Button(prop) {
    const classes = prop.primary ? [styles.Button, styles.Primary]: [styles.Button, styles.Secondary];
    const tab = prop.tab ? "_blank": "_self"
    return(
        <a className={classes.join(' ')} href={prop.href} target={tab}>{prop.children}</a>
    );
}

export default Button;