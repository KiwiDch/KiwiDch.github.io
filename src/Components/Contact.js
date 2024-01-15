import Github from '../Ressources/github.png'
import Linkedin from '../Ressources/Linkedin.png'
import Mail from '../Ressources/mail.png'
import Discord from '../Ressources/discord.svg'
import style from '../styles/Contact.module.css'

function Contact() {
    return(
        <div id='contact' className={style.Contact}>
            <h1>Contact</h1>
            <h2>If you want to interact with me</h2>
            <div>
                <a href="https://github.com/KiwiDch" target='_blank'> <img src={Github}/></a>
                <a href="https://www.linkedin.com/in/elian-ducheyne-a1821722b/" target='_blank'><img src={Linkedin}/></a>
                <a href="mailto:elian.ducheyne@gmail.com" target='_blank'><img src={Mail}/></a>
                <a href="https://discordapp.com/users/213678828235653121" target='_blank'><img src={Discord}/></a>
            </div>
        </div>
    )
}

export default Contact;