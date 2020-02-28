import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Layout from '../components/layout'
import { useState, useEffect } from 'react'
import Firebase from '../components/Firebase/firebase'

const SignUp = (props) => {

    const [form, setState] = useState({
        username: '',
        passwordOne: '',
        passwordTwo: '',
        email: '',
        zipcode: '',
        isAuth: false,
        error: null
      });
      const handleChange = e => {
        setState({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleFormSubmit = async e => {
        e.preventDefault();
        try {
            await Firebase.doCreateUserWithEmailAndPassword(email, passwordOne)
            this.props.doSetCurrentUser({
                username,
                email,
            })
            this.setState({isAuth: true});
        } catch(error) {
            this.setState({
                error,
            });
            setTimeout(() => {
                this.setState({
                    error: null,
                });
            }, 3000);
        }
    }
    const isInvalid =
    form.passwordOne !== form.passwordTwo ||
    form.passwordOne === '' ||
    form.email === '' ||
    form.username === '';
    if(form.isAuth) {
        return <Redirect to = '/login' />
    }


    return(
    <Layout>
        <>
        <form onSubmit={handleFormSubmit}> 
            <input
                placeholder='Full Name'
                name= 'usernmae'
                onChange={handleChange}
            /> <br />
                        <input
                placeholder='E-Mail'
                name='email'
                onChange={handleChange}
            /><br />
            <input
                placeholder='password'
                type='password'
                name='passwordOne'
                onChange={handleChange}
            /> <br />
            <input
                placeholder='Confirm Password'
                name='passwordTwo'
                type='password'
                onChange={handleChange}
            /> <br/> 

                <input
                placeholder='Zip-code'
                name='zipcode'
                onChange={handleChange}
            /> <br />
        <button disabled={isInvalid} type="submit">submit</button>
        </form>
        This information will never be used to track or search down personal information.
        This web-site does not have any purpose of gathering personal information but to only for the educational purposes
        
    </>
    </Layout>
    )
}
export default SignUp
