import reducer from './reducer';
import edit from './edit'

export default {
    reducer,
    ui: {
        EditPage: edit.ui.Page
    }
};