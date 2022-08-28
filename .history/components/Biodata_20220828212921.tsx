import React from 'react'

type AppProps=  {
    message: string
}

const BioComponent = ({ message } : AppProps) : JSX.Element => (
    <div>{message}</div>
)

export default BioComponent;
