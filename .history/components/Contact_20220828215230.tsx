import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react'

type AppProps=  {
    title: string;
    mediumName: string;
    link: string;
    iconComponent: React.ReactNode 
}

const Contact = ({ title, mediumName, link, iconComponent } : AppProps ) : JSX.Element => (
    <div>
        <h1>{title}</h1>
        <Link href={link}>
        {iconComponent}
        </Link>
    </div>
)

export default Contact;