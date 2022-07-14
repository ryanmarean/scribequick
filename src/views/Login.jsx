import React, { useState, useEffect } from 'react';
import * as Realm from 'realm-web';
import { Button, Container, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';

import { isAnon } from '../components/login/utils';

const Login = ({mongoContext: {app, user, setUser}, type = 'login'}) => {
    
    const UserDetail = ({ user }) => {
        return (
            <div>
                <h1>Logged in with anonymous id: {user.id}</h1>
            </div>
        );
        }

    //Check if the user is logged in, if yes, redirect to dashboard
    const history = useHistory();
    useEffect(() => {
        if (!isAnon(user)) {
            history.push('/dashboard')
        }
    }, [history, user])
    
    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(formData);

    }

    return (
        <Container>
            {user && <UserDetail user={user} />}
            <Row>
                <Col>
                    <Formik
                        initialValues={{ emailAddress: '', password: '' }}
                        onSubmit={ async (values) => {
                            if (type === 'create') {
                                alert('Sorry, please contact the administrator in order to register a new account');
                            }
                            const credentials = Realm.Credentials.emailPassword(values.emailAddress, values.password);
                            setUser(await app.logIn(credentials));
                        }}
                    >
                        <Form>
                                <label htmlFor='emailAddress'>Email Address</label>
                                <Field name='emailAddress' type="email" />

                                <label>Password</label>
                                <Field name="password" type="password" />
                            <Button type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Formik>
                </Col>
                <Col>
                    <p>Don't have a login? Try out a Demo here. Demo accounts have access to all features as full users, but Demo data is periodically swept. Don't count on your Champion being around later!</p>
                    <Button>
                        Demo
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;