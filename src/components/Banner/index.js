import React from 'react';
import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minhafoto.jpg';

export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>Ola mundo</h1>
            <p className={styles.paragrafo}>Olá, me chamo Lucas Iori, sou estudante de programação na Alura. Meu foco atualmente é em front-end e react.</p>
        </div>

        <div className={styles.imagens}>
            <img 
							className={styles.circuloColorido}
							src={circuloColorido}
							aria-hidden={true}
							alt='Circulo colorido'
						/>

						<img 
							className={styles.minhaFoto}
							src={minhaFoto}
							alt='Foto do Messi'
						/>
        </div>
    </div>
  )
}
