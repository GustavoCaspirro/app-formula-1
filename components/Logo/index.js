import React from 'react';
import { Image, Platform } from 'react-native';
import LogoImg from '../../assets/logo.jpg';

const Logo = () => {
    console.log(Platform.OS)
    return (
        <Image source={ LogoImg } />
    )
};

export default Logo;