import Image from 'next/image';
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
        <Image src={ image } alt={ mediumName }/>
       
    </div>
)

export default Contact;