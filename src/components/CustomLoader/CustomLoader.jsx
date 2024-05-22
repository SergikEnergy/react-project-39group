import { RotatingLines } from 'react-loader-spinner';

import classes from './CustomLoader.module.css';

export const CustomLoader = () => (
  <div className={classes.spinner}>
    <RotatingLines
      visible={true}
      height="96"
      width="96"
      strokeWidth="3"
      animationDuration="2"
    />
  </div>
);
