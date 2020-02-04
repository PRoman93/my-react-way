import React from 'react'
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={props.handleSubmit}>
                <div><Field component={'input'} name={'login'} placeholder={'Login'}/></div>
                <div><Field component={'input'} name={'password'} placeholder={'Password'}/></div>
                <div><Field component={'input'} name={'rememberMe'} type='checkbox'/> remember me</div>
                <div><button>Login</button></div>
            </form>
        </div>

    )
}

const LoginReduxForm = reduxForm({form:'login'})(LoginForm)

const Login = (props)=> {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
        <h2>Login</h2>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
export default LoginForm