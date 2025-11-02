import React from 'react'
import logoPlaceholder from '../resouces/images/logoPlaceholder.svg';
import { type LogoProps } from '../types/types';

export const Logo = ({ text }: LogoProps) => {
  return (
    <div className='auth-form-logo-container'>
        <img src={logoPlaceholder} alt="logo" />
        <span>&nbsp;&nbsp;{text}</span>
    </div>
  )
}

