import React from 'react';
import toast, { ToastOptions } from 'react-hot-toast';
import { ECustomization } from './models/customization';

export type TToastProps = {
    message: string;
    customization: ECustomization;
}

const baseToastOptions:ToastOptions = {
    duration: 4000,
    position: 'top-center',
    style: {
        backgroundColor: 'var(--text)'
    }
}

export default function renderToast({ customization, message}: TToastProps) {

    function getToastOptions(customization: ECustomization):ToastOptions{
    // switch(customization){
    //     case ECustomization.success:
    //         return {}
    // }
    return {
        ...baseToastOptions,
        style:{
            //TODO: REWRITE BACKGROUND BASED ON TOAST CUSTOMIZATION
            ...baseToastOptions.style,
            // background: red
        }
    }
}


  return toast(message, getToastOptions(customization));
}
