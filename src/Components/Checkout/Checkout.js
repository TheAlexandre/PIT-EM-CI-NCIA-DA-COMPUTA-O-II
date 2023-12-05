import React from 'react';
import { Link } from 'react-router-dom';
import useMedia from '../../Hooks/useMedia';
import Cart from '../Home/Cart/Cart';
import Form from './Form/Form';
import styles from './Checkout.module.css';

const Checkout = () => {
  const mobile = useMedia('(max-width: 390px)');

  return (
    <div className={`${mobile && styles.openCheckout}`}>
      <div className={styles.mainCheckout}>
        <Link to="/">← Voltar</Link>
        <div className={styles.formArea}>
          <Form />
        </div>
      </div>
      {!mobile ? (
        <Cart isCheckout={true} />
      ) : (
        ''
      )}
    </div>
  );
};

export default Checkout;