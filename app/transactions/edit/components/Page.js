import React from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import accounts from '../../../accounts';
import transactionCategories from '../../../transactionCategories';
import transactionSubcategories from '../../../transactionSubcategories';
import * as actions from '../actions';
import { isLoading, getEntity } from '../selectors';
import Header from '../../../components/Header';
import Loading from '../../../components/Loading';
import Form from './Form';

const valuesSelector = formValueSelector('transactionEdit');

const mapStateToProps = (state, props) => {
    const { type, categoryId } = valuesSelector(state, 'type', 'categoryId');
    const entity = getEntity(state);
    const transactionType = typeof type !== 'undefined' ? type : entity && entity.type;
    return ({
        loading: isLoading(state),
        transactionType,
        entity,
        accounts: accounts.selectors.getActive(state),
        categories: transactionCategories.selectors.getByType(state, transactionType),
        subcategories: transactionSubcategories.selectors.getByCategory(state, categoryId)
    })
};

class Page extends React.Component {
    componentDidMount() {
        const { params, initCreate } = this.props;
        const id = Number(params.id);
        if (Number.isNaN(id)) {
            initCreate();
        } else {

        }
    }

    componentWillUnmount() {
        this.props.createDestroy();
    }

    handleSubmit = async (values) => {
        const { params, saveCreate } = this.props;
        const id = Number(params.id);
        if (Number.isNaN(id)) {
            return await saveCreate(values);
        } else {

        }
    }

    render() {
        const { loading, entity, transactionType, accounts, categories, subcategories } = this.props;
        return (
            <div>
                <Header title="Transaction" />
                <Loading loading={loading || !entity}>
                    <Form
                        initialValues={entity}
                        transactionType={transactionType}
                        accounts={accounts}
                        categories={categories}
                        subcategories={subcategories}
                        onSubmit={this.handleSubmit} />
                </Loading>
            </div>
        );
    }
}

export default connect(mapStateToProps, actions)(Page);
