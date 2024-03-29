import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import fieldErrors from '../helpers/fieldErrors';
import { register } from '../store/actions/users';

function Register(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const ERRORS = fieldErrors(props.user?.errField)

    const registerHandler = async (e) => {
        e.preventDefault()

        let data = {
            name,
            email,
            password
        }

        try {
            await props.dispatch(register(data))

            navigate('/dashboard')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section id="hero" className="section-1">
            <div className="container">
                <div>
                    <div className="title text-center">
                        <h1><span className="highlight">Daftar</span> sekarang</h1>
                        <h1>Linkpendek.in</h1>
                    </div>

                    <div className="d-flex justify-content-center">
                        <div className="col-md-8">
                            <form onSubmit={registerHandler} method="post" autoComplete="off">
                                <div className="mb-4">
                                    <input type="text" className="form-control" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}
                                        placeholder="Masukkan nama" />
                                    <p className='small text-danger mt-2'>{ERRORS?.name?.message}</p>
                                </div>
                                <div className="mb-4">
                                    <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Masukkan email" />
                                    <p className='small text-danger mt-2'>{ERRORS?.email?.message}</p>
                                </div>
                                <div className="mb-4">
                                    <input type="password" className="form-control" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Masukkan password" />
                                    <p className='small text-danger mt-2'>{ERRORS?.password?.message}</p>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-blue" disabled={props.user.loading}>Daftar</button>
                                </div>
                            </form>
                            <p className="text-muted text-center mt-4">Sudah punya akun? <Link to={'/login'} className="highlight">Masuk</Link> sekarang.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.users
    }
}

export default connect(mapStateToProps, null)(Register);