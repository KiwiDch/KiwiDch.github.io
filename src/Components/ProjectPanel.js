import styles from '../styles/ProjectPanel.module.css'
import Button from './Button'

function ProjectPanel(prop) {
    return (
        <div className={styles.ProjectPanel}>
            <div className={styles.ProjectText}>
                <h3>{prop.categories.join(', ')}</h3>
                <h1>{prop.titre}</h1>
                <p>{prop.description}</p>
                {prop.link != null && <Button primary href={prop.link} tab>More about</Button>}
            </div>
            <img src={prop.image} alt={prop.alt} />
        </div>
    )
}

export default ProjectPanel;