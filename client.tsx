import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import WordRelay from './WordRelay';

const Hot = hot(WordRelay);

ReactDOM.render(<GuGuDan />, document.querySelector('#root'))