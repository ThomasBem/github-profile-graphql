import React from 'react';

import style from './Error.scss';

const Error = ({ errorMessage }) => (
  <div className={style.root}>
    <div>
      { errorMessage }
    </div>
  </div>
);

export default Error;