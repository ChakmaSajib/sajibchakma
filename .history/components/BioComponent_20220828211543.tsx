import React from 'react'

type AppProps=  {
    message: string
}

const BioComponent = ({ message } : ) : JSX.Element => (
    <div>{message}</div>
)

export default BioComponent;
