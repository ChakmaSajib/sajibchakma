import React from 'react'

type AppProps =  {
    message: string
}

const BioData = ({ message } : AppProps) : JSX.Element => (
    <div>{message}</div>
)

export default BioData;
