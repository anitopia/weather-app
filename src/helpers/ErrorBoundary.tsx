import React from 'react';

const ErrorBoundary: React.FC<any> = ({ error, children }) => (error ?
    <div>Error: {error && error.message}</div>
    : children);
    
export default ErrorBoundary
