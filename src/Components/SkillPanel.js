import styles from '../styles/SkillPanel.module.css'

function SkillPanel(prop) {
    return (
        <div className={styles.Skill}>
            <div>
                {
                    prop.images.map(([image, alt]) => <img src={image} alt={alt} />)
                }
            </div>
            <h3>{prop.name}</h3>
        </div>)
}

export default SkillPanel;