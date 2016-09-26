export default (store) => (nextState, replace) => {
    const { auth } = store.getState();
    if (auth.isAuthenticated) {
        return;
    }

    replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
    });
};
