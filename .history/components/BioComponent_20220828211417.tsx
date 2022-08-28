import React from 'react'

type AppProps=  {
    message: string
}

const BioComponent = ({ message }:  AppProps) => (
    <div>{message}</div>
)

export default BioComponent;
