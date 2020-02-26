import React, { Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import {signout, isAuthenticated } from '../auth'

const isActve = (history, path) => {
    if (history.location.pathname === path) {
        return { color: '#ff9900' }
    } else return { color: '#ffffff' }
}

function Menu({ history }) {
    return (
        <Fragment>
            <ul className='nav nav-tabs bg-primary'>

            <li className='nav-item'>
                    <Link className='nav-link' style={isActve(history, '/')} to='/'>Home </Link>
                </li>
                
        {!isAuthenticated() && (
            <div>
            <li className='nav-item'>
                    <Link className='nav-link' style={isActve(history, '/signup')} to='/signup'>Sign Up</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' style={isActve(history, '/signin')} to='/signin'>Sign In </Link>
                </li>
            </Fragment>
        )}

                {isAuthenticated() && (
                    <Fragment>
                <li className='nav-item'>
                    <span className='nav-link' style={{cursor: 'pointer', color: 'white'}} onClick={() => signout(() =>{
                        history.push('/')
                    })}>Sign out</span>
                </li>
                    </Fragment>
                )}

            </ul>
        </div>
    )
}
export default withRouter(Menu)
