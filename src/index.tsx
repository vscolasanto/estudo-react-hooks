import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

// import { UseStateComponent } from 'components/useStateComponent';
// import { UseEffectComponent } from 'components/useEffectComponent';
import { UseCallbackComponent } from 'components/useCallbackComponent';

ReactDOM.render(
  <React.StrictMode>
    {/* <UseStateComponent /> */}
    {/* <UseEffectComponent /> */}
    <UseCallbackComponent />
  </React.StrictMode>,
  document.getElementById('root'),
);
