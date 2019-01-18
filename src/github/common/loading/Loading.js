import React from 'react';
import { GridLoader } from 'react-spinners';

import style from './Loading.scss';

const Loading = () => (
  <div className={style.root}>
    <GridLoader color="#512D6D" size={30} sizeUnit={"px"}/>
  </div>
);

export default Loading;