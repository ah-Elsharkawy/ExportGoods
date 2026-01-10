import React from "react";
import "./Button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  fullWidth = false,
  loading = false,
  disabled,
  className = "",
  ...props
}) => {
  const classes = [
    "button",
    `button-${variant}`,
    `button-${size}`,
    fullWidth ? "button-full" : "",
    loading ? "button-loading" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      {loading && <span className="button-spinner"></span>}
      <span className={loading ? "button-text-hidden" : ""}>{children}</span>
    </button>
  );
};

export default Button;
