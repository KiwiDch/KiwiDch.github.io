import style from '../styles/AboutMe.module.css'
import Button from './Button';
import CV from '../Ressources/cv.pdf'
import Portfolio from '../Ressources/portfolio.pdf'

function AboutMe() {
    return (
        <div id='about-me' className={style.AboutMe}>
            <h1>Who I am</h1>
            <div className={style.Sub}>
                <p>I’m <span>Elian Ducheyne</span>. I come from Compiègne, France and I'm 20 years old.
                    After passing my baccalauréat STI2D with honors at the Mireille Grenet high school,
                    I decided to pursue my studies in the field of computer science.<br /><br />
                    In 2021, I decided to enroll at the <span>University Institute of Technology</span> in Montpellier and
                    I am now about to obtain a bachelor's degree in <span>computer science</span>, specializing in the deployment
                    of secure and communicating applications. I then plan to continue my studies in system and network
                    administration or DevOps.<br /><br />During my free time I like to <span>learn new concepts</span> in depth.
                    If I discover something I don't know yet, I would enjoy trying to dig to find out how it works <span>under the hood.</span></p>
                <div className={style.Educations}>
                    <h2>Education</h2>
                    <div className={style.Education}>
                        <div>
                            <h3>BUT in Computer Science</h3>
                            <h3>2021-2024</h3>
                        </div>
                        <p>IUT Montpellier-Sète<br/><br/>Specialized in deploying secure, communicating applications</p>
                    </div>
                    <div className={style.Education}>
                        <div>
                            <h3>Bac STI2D</h3>
                            <h3>2018-2021</h3>
                        </div>
                        <p>Mireille Grenet High school<br/>Obtained with honours<br/><br/>Specialized in Information and Digital Systems</p>
                    </div>
                    <div className={style.Buttons}>
                        <Button primary href={CV}>Download CV</Button>
                        <Button href="#contact">Contact me</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;