import clsx from "clsx";

function Card({ children, className, ...props }) {
  return (
    <div className={clsx("rounded-3xl", className)} {...props}>
      {children}
    </div>
  );
}

export default Card;
