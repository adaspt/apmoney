import React, { Component } from 'react';
import { connect } from 'react-redux';
import { decode } from 'querystring';
import * as actions from './actions';

class Login extends Component {
    componentDidMount() {
        const params = decode(window.location.hash.substring(1));
        if (!params.access_token && !params.error) {
            const clientId = encodeURIComponent('937228718376-d847opttvjog2gq0ejdlbnsvnk90mhu7.apps.googleusercontent.com');
            const redirectUri = encodeURIComponent(`${location.protocol}//${location.host}/login`);
            window.location = `https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile&response_type=token&client_id=${clientId}&redirect_uri=${redirectUri}`;
            return;
        }

        if (params.access_token) {
            const { login } = this.props;
            login(params.access_token);
        } else {
            console.log('ERROR', params.error);
        }
    }

    render() {
        return (
            <section>
                <h1>Login</h1>
            </section>
        );
    }
}

export default connect(null, actions)(Login);