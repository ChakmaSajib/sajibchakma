import React from 'react'


const BioComponent: React.FunctionComponent<{message: string}> = ({ message }) => (
    <div>{message}</div>
)

export default BioComponent;
