import React from "react";
import './Register.css'

const Register = ({onRouteChange}) => {
    return (
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 signin center">
            <div className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="first-name">First Name</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 " type="text" name="first-name" autoComplete="given-name" id="first-name"/>
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="last-name">Last Name</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 " type="text" name="last-name" autoComplete="family-name" id="last-name"/>
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" autoComplete="username" id="email-address"/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" autoComplete="new-password" name="password"  id="password"/>
                    </div>
                    </fieldset>
                    <div className="">
                    <input 
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" value="Register" 
                    onClick={() => onRouteChange('home')}/>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Register;