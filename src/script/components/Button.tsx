import React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>


export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children = "ボタン",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
