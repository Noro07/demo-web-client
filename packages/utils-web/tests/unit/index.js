import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({
  adapter: new Adapter(),
  disableLifecycleMethods: true,
});

const testsContext = require.context('.', true, /\.spec.jsx?$/);
testsContext.keys().forEach(testsContext);
