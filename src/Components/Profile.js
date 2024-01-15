import Image from '../Ressources/portfolio.jpg'
import style from '../styles/Profile.module.css'
import Button from './Button';

function Profile() {
    return(
        <div className={style.Profile}>
            <div className={style.Circle}>
                <img src={Image}/>
            </div>
            <div className={style.Content}>
                <h1>Hi, I'm <span>Elian Ducheyne</span></h1>
                <p>I’m a computer science student at the University Institute of Technology in Montpellier 👨🏼‍💻</p>
                <div className={style.Buttons}>
                    <Button href="#about-me" primary={true} >Learn about me</Button>
                    <Button href="#contact">Contact me</Button>
                </div>
            </div>
        </div>
    );
}

export default Profile;