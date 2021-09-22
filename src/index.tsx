import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { UseStateComponent } from 'components/useStateComponent';
import { UseEffectComponent } from 'components/useEffectComponent';

ReactDOM.render(
  <React.StrictMode>
    {/* <UseStateComponent /> */}
    <UseEffectComponent />
  </React.StrictMode>,
  document.getElementById('root'),
);
