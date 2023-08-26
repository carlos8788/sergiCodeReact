import React, { useEffect, useRef } from 'react'
import { useForm } from '../hooks/useForm'

export const FormComponent = () => {

    const focusRef = useRef();

    useEffect(() => {
        focusRef.current.focus();
    },[])

    const initialForm = {
        username: '', 
        email: '', 
        password: ''
    }

    const { username, email, password, formState, onInputChange } = useForm(initialForm)
    
    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState);
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                    ref={focusRef}
                    type="text"
                    className="form-control"
                    name="username"
                    value={username}
                    onChange={onInputChange}
                />

            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                />

            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={onInputChange}
                />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
