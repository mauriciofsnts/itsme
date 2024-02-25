import { cn } from "@/lib/utils";

type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLSpanElement>;

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <span
      className={cn(
        "text-[#A0A5AC] uppercase tracking-widest font-medium text-xs select-none",
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
};

export default SectionTitle;
