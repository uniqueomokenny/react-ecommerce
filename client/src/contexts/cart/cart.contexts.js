import { createContext } from 'react';

const CartConext = createContext({
  hidden: true,
  toggleHidden: () => {}
});

export default CartConext;
