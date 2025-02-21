import { CiCoffeeCup } from "react-icons/ci";
import css from './UserMenu.module.css'

export default function UserMenu({ name }) {
  return (
    <div className={css.box}>
      <p><CiCoffeeCup className={css.icon} size="100" /> {name}</p>
    </div>
  );
};
