import React, {InputHTMLAttributes} from 'react';

import {InputComponent} from './styles';

interface InputProps  extends InputHTMLAttributes<HTMLInputElement>{
    label?: string;
    name?: string;
}

const Input: React.FC <InputProps> = ({label,  ...rest}) => {
    return (
               <InputComponent {...rest} />              
    );
}

export default Input;