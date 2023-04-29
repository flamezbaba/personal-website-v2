import { ButtonHTMLAttributes, FC } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md transition-color ease-linear duration-500",
  {
    variants: {
      variant: {
        primary:
          "bg-[#6a47ef] hover:bg-[#fffeff] text-[#fffeff] hover:text-[#6a47ef]",
        secondary: "",
      },
      size: {
        sm: "px-4 py-2",
        lg: "px-6 py-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
     
    }

const Button: FC<ButtonProps> = ({
  className,
  children,
  variant,
  size,
  ...props
}) => {
  return (
    <button onClick={props.onClick} className={cn(buttonVariants({ variant, size, className }))}>
      {children}
    </button>
  );
};

export default Button;
