import React from "react"
import './Burger.scss'


export const Burger: React.FC = () => {
  return (
    <section className="burger">
    <div className="burger__top">
      <a className = "burger__logo" href="#"><img src="./img/icons/logo.svg" alt="Logo Phone Catalog" /></a>
      <button className = "burger__close" type="button"><img src="./img/icons/close.svg" alt="" /></button>
      </div> 
      </section>
   )
}