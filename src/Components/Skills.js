import styles from '../styles/Skills.module.css';
import Html from '../Ressources/html.png';
import Css from '../Ressources/css.png'
import Js from '../Ressources/js.png'

import C from '../Ressources/C.png'
import Cpp from '../Ressources/cpp.png'
import Rust from '../Ressources/Rust.png'

import Csharp from '../Ressources/csharp.png'
import Java from '../Ressources/java.png'
import Python from '../Ressources/python.png'

import Macos from '../Ressources/macos.png'
import Windows from '../Ressources/windows.png'
import Linux from '../Ressources/Linux.png'

import Docker from '../Ressources/docker.png'
import Swarm from '../Ressources/swarm.png'

import Gitlab from '../Ressources/gitlab.png'

import swift from '../Ressources/swift.svg'
import swiftui from '../Ressources/swiftui.png'

import sql from '../Ressources/sql.png'

import solidity from '../Ressources/solidity.png'

import bash from '../Ressources/bash.png'
import zsh from '../Ressources/zsh.png'

import anchor from '../Ressources/anchor.png'

import solana from '../Ressources/solana.png'
import ethe from '../Ressources/etherum.png'

import SkillPanel from './SkillPanel';

function Skills() {
    const imagesWeb = [[Html, "html image"], [Css, "css image"], [Js, "js image"]];
    const imagesLowLevel = [[C, "C image"], [Rust, "Rust image"], [Cpp, "C++ image"]];
    const imagesHighLevel = [[Python, "Python image"], [Java, "Java image"], [Csharp, "Csharp image"]];
    const imagesOS = [[Macos, "Macos image"], [Linux, "Linux image"], [Windows, "Windows image"]];
    const imagesMobile = [[swift, "Swift image"], [swiftui, "SwiftUi image"]];
    const imagesCICD = [[Gitlab, "Gitlab image"]];
    const imagesSmartContract = [[solana,"solana image"],[ethe, "ethereum image"]];
    const imagesBdd = [[sql, "sql image"]];
    const imagesShells = [[bash, "bash image"], [zsh, "zsh image"]];
    const imagesVirtu = [[Docker, "docker image"], [Swarm, "swarm image"]];


    return (
        <div className={styles.Skills} id='skills'>
            <h1>What are my Skills</h1>
            <h2>An overview of my skills</h2>
            <div className={styles.SkillsPanel}>
                <SkillPanel images={imagesWeb} name="Web" />
                <SkillPanel images={imagesLowLevel} name="Low level programming" />
                <SkillPanel images={imagesHighLevel} name="High level programming" />
                <SkillPanel images={imagesOS} name="Operating System" />
                <SkillPanel images={imagesMobile} name="Mobile programming" />
                <SkillPanel images={imagesCICD} name="CI/CD" />
                <SkillPanel images={imagesShells} name="Scripting" />
                <SkillPanel images={imagesVirtu} name="Virtualization" />
                <SkillPanel images={imagesBdd} name="Database" />
                <SkillPanel images={imagesSmartContract} name="Blockchain" />
            </div>
        </div>
    );
}

export default Skills;