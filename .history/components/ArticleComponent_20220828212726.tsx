import React from 'react'

type AppProps = { 
    title: string,
    description: string
    tag: string
}


const Article = ({ title, description, tag} : AppProps) : JSX.Element => (
    <div>
        <h1>{title}</h1>
        <article>{description}</article>
        <span>{tag}</span>
    </div>
)

export default Article;
