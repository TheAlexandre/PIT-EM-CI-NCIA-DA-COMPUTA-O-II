import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HomeNav.module.css';
import { ReactComponent as CoffeeIcon } from '../../../Assets/coffee.svg';
import { ReactComponent as CoffeeColdIcon } from '../../../Assets/frappe.svg';
import { ReactComponent as BreadIcon } from '../../../Assets/bread.svg';
import { ReactComponent as DonutIcon } from '../../../Assets/donut.svg';

const HomeNav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/Bebidas_Quentes" activeClassName={styles.active}>
        <CoffeeIcon />
        Bebidas Quentes
      </NavLink>
      <NavLink to="/Bebidas_Geladas" activeClassName={styles.active}>
        <CoffeeColdIcon />
        Bebidas Geladas
      </NavLink>
      <NavLink to="/Doces" activeClassName={styles.active}>
        <DonutIcon />
        Doces
      </NavLink>
      <NavLink to="/Salgados" activeClassName={styles.active}>
        <BreadIcon />
        Salgados
      </NavLink>
      {/* <NavLink to="/Combos" activeClassName={styles.active}>
        <CombosIcon />
        Combos
      </NavLink>
      <NavLink to="/Burguers" activeClassName={styles.active}>
        <BurguersIcon />
        Burguers
      </NavLink> */}
    </nav>
  );
};

export default HomeNav;