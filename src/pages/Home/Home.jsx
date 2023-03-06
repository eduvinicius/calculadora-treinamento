// CSS
import styles from './Home.module.css';

//images
import imgHome from '../../images/2.gif'

const Home = () => {
  return (
    <div className={styles.container}>
      <h2>Seja bem-vindo(a) à Calculadora de Treinamento</h2>
      <p>Neste site, é possível realizar o cálculo de diversas variáveis do treinamento físico</p>
      <img src={imgHome} />
      <p>Espero que este site seja útil para todos os profissionais e praticantes da área</p>
      <p>Navegue pelos nossos links acima e aproveite o conteúdo!</p>
    </div>
  )
}

export default Home;