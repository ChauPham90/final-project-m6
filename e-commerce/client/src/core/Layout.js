import React from 'react'

function Layout({ description = 'description', title = 'title', children, className }) {
    return (
        <div>
            <div className='jumbotron'>
                <h2>{title}</h2>
                <p className='lead'>{description}</p>
            </div>
            <div className={className}>{children}</div>
        </div>

    )
}

export default Layout
