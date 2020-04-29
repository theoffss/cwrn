import React from 'react';

import './custom-button.styles.scss';


const CustomButton = ({children, isGoogleSignIn, ...otherProps})=>(

//     Le children est la partie à l'intérieur des balises ici dans 
// sign-in component qui envoi ces balises
    <button 
        className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} 
        {...otherProps}
    >
        {children}  
    </button>

);

export default CustomButton;
