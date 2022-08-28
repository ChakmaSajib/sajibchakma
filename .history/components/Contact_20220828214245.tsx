import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type AppProps=  {
    title: string;
    mediumName: string;
    link: string;
    image: string 
}

const Contact = ({ title, mediumName, link, image } : AppProps ) : JSX.Element => (
    <div>
        <h1>{title}</h1>
        <Link>
        <Image src={ image } alt={ mediumName }/>
        </Link>
       

       
    </div>
)

export default Contact;