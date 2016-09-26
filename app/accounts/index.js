import * as actions from './actions';
import reducer from './reducer';
import * as selectors from './selectors';
import Page from './components/Page';

export default {
    actions,
    reducer,
    selectors,
    ui: {
        Page
    }
};
