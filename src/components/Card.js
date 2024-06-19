import clsx from "clsx";
import styles from "@/styles/components/card.module.scss";

function Card({ children, className, ...props }) {
  return (
    <div className={clsx(styles.cardContainer, className)} {...props}>
      {children}
    </div>
  );
}

export default Card;
