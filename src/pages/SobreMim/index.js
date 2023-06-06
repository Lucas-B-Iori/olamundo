import PostModelo from 'components/PostModelo';
import React from 'react';
import fotoCapa from 'assets/sobre_mim_capa.png';
import styles from './SobreMim.module.css';

export default function SobreMim() {
  return (
    <PostModelo 
      fotoCapa={fotoCapa}
      titulo='Sobre mim'
    >
      <h3 className={styles.subtitulo}>
        Olá, eu sou o Lucas
      </h3>
   
      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou um estudante de front-end e react, estou buscando minha primeira experiência profissional.
      </p>
      <p className={styles.paragrafo}>
        Minha história com programação começou quando eu consegui entrar na minha primeira faculdade, no IFSP em Piracicaba. Foi lá que eu vi os básico do básico em linguagem C e aprendi um pouco sobre programação.
      </p>
      <p className={styles.paragrafo}>
        Porém, foi através de cursos online que eu realmente comecei a evoluir na programação. Comecei a estudar JavaScript através da Udemy e fui evoluindo na linguagem.
      </p>
      <p className={styles.paragrafo}>
        No final de 2022, assinei a Alura, que me permitiu estudar por completo todo o desenvolvimento front-end, começando por HTML e CSS(que até então eu sabia muito pouco).
      </p>
      <p className={styles.paragrafo}>
        Depois fui capaz de evoluir para no JavaScript para Front-end e também comecei a estudar ReactJS. Com isso eu ja tinha mais capacidade de criar projetos cada vez mais robustos.
      </p>
    </PostModelo>
  )
}
