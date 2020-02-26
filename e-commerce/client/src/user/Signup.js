import React from 'react'
import Layout from '../core/Layout'
import { API } from '../config'
export default function Signup() {
    return (
        <Layout
            title='signup'
            description='After this, we can find a job with 30.000kr as least'
            children={API} />

    )
}
