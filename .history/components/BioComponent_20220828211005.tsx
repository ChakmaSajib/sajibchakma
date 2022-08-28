import React from 'react'


const BioComponent: React.FC<{message: string}> = ({ message }) => (
    <div>{message}</div>
)

export default BioComponent;
