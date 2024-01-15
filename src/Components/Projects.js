import styles from '../styles/Projects.module.css'
import ProjectPanel from './ProjectPanel'

import Sharkpoll from '../Ressources/sharkpoll.png'
import Backup from '../Ressources/backup.png'
import Sso from '../Ressources/sso.png'
import TB from '../Ressources/TB.jpg'

function Projects() {

    const descriptionSharkpoll = "Sharkpoll is a secure voting software written in Java that uses the El Gamal cryptosystem and a zero-knowledge proof protocol to encrypt ballots and TLS to encrypt exchanges."
    const descriptionSauvegarde = "This project consists of developing software to back up a machine's files on a remote server, so that files can be restored automatically in the event of a problem."
    const descriptionSso = "The aim of this project is to set up an IT infrastructure made up of several interconnected services, with the main objective of centralizing the authentication process using an LDAP directory server."
    const descriptionTimeBomb = "Time bomb is a 2D arena game with local multiplayer where the aim is to to pass the bomb to your opponent before it explodes. The game was developed during the 7th Code Game Jam. By developing this game in 30 hours maximum, our \"Rebelote\" team won the Public Prize and the Jury's of the jury."
    
    return(
        <div className={styles.Projects} id='projects'>
            <h1>My projects</h1>
            <h2>Some of my recents works</h2>
            <ProjectPanel categories={["Docker", "Ldap", "SSO"]} titre="Centralization of complex, secure services" description={descriptionSso} image={Sso} alt="Image sso"/>
            <ProjectPanel categories={["C", "Rust", "PRA"]} titre="Backup and recovery software" description={descriptionSauvegarde} image={Backup} alt="Backup image"/>
            <ProjectPanel categories={["ElGamal", "Cryptographie", "JavaFx"]} titre="Sharkpoll" description={descriptionSharkpoll} image={Sharkpoll} alt="Sharkpoll image" link="https://github.com/orgs/SAE-Vote-Reseau/repositories"/>
            <ProjectPanel categories={["Unity", "C#", "Game jam"]} titre="Time Bomb" description={descriptionTimeBomb} link="https://rebeloteequipe3.itch.io/cgj-rebelote-timebomb" image={TB} alt="Image of the game"/>
            <h2>See my others projects on <a href="https://github.com/KiwiDch" target='_blank'>Github</a></h2>
        </div>
    )
}

export default Projects