import React from 'react';

const Loading = ({ loading, children }) => (
    <div>{loading ? 'Loading...' : children}</div>
);

Loading.propTypes = {
    loading: React.PropTypes.bool.isRequired
};

export default Loading;