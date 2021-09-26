import { UseRefComponent } from 'components/useRefComponent';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

// import { UseStateComponent } from 'components/useStateComponent';
// import { UseEffectComponent } from 'components/useEffectComponent';
// import { UseCallbackComponent } from 'components/useCallbackComponent';
// import { UseMemoComponent } from 'components/useMemoComponent';

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      {/* <UseStateComponent /> */}
      {/* <UseEffectComponent /> */}
      {/* <UseCallbackComponent /> */}
      {/* <UseMemoComponent /> */}
      <UseRefComponent />
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);
