import React from "react";
import toast, { ToastOptions } from "react-hot-toast";
import { ECustomization } from "./models/customization";

export type TToastProps = {
  message: string;
  customization: ECustomization;
};

const baseToastOptions: ToastOptions = {
  duration: 4000,
  position: "top-center",
  style: {
    fontFamily: 'dm-sans',
    color: 'var(--bg-dark)'
  }
};

export default function renderToast({ customization, message }: TToastProps) {
  function getToastOptions(customization: ECustomization): ToastOptions {
    switch (customization) {
      case ECustomization.success:
        return {
          ...baseToastOptions,
          style: {
            ...baseToastOptions.style,
            backgroundColor: "var(--success)",
          },
        };
      case ECustomization.info:
        return {
          ...baseToastOptions,
          style: {
            ...baseToastOptions.style,
            backgroundColor: "var(--info)",
          },
        };
      case ECustomization.error:
        return {
          ...baseToastOptions,
          style: {
            ...baseToastOptions.style,
            backgroundColor: "var(--danger)",
          },
        };
      case ECustomization.warning:
        return {
          ...baseToastOptions,
          style: {
            ...baseToastOptions.style,
            backgroundColor: "var(--warning)",
          },
        };
    }
  }

  return toast(message, getToastOptions(customization));
}
