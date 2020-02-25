import React from 'react'
import Layout from '../core/Layout'
import { API } from '../config'
export default function Signup() {
    return (
        <Layout
            title='Home page'
            description='dont waste money, free video in youtube is more useful.'
            children={API} />

    )
}
