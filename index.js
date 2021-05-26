import './src/styles/ac-recurrence.scss';
import 'ac-grid';
import RRule from 'rrule';

require('./src/ac-recurrence.module.js');
importAll(require.context('./src/templates', false, /\.html$/));
importAll(require.context('./src', true, /^((?!\.module).)*$/));

function importAll (r) {
  r.keys().forEach(r);
}

