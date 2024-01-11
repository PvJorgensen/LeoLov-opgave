import style from './header.module.scss';
import headerimg from '../../assets/LeoLovOnePage/header-img.jpg';


export const Header = () => {
    return (
      <> 
      <header className={style.headerWrapper}>
      <section className={style.textWrapper}>
      <h1><span className={style.sepColor}>LEO</span>-LOV</h1>
      <p>Lov og ret kan være et plaster! Hvis du ellers har knaster!</p>
      </section>
      <img className={style.hImg} src={headerimg} alt="forside billede" />  
      </header>
      </>
    )
  }