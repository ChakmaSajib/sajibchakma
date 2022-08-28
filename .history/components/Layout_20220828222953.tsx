import Head from 'next/head';
import React from 'react'

type LayoutPros = {
    title: string;
    description: string;
    children: React.ReactNode;
}

const Layout = ({ title, description, children} : LayoutPros) :JSX.Element =>{
    return (
        <div>
            <Head>
                <title>Sajib Chakma personal website</title>
                <meta name="description" content="Sajib Chakma personal website" /> 
            </Head>
        </div>
    )


export default Layout;