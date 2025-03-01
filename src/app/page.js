import styles from "./page.module.css";
import Logo from "@/components/Logo/Logo";
import Tema from "@/components/Logo/tema";

export default function Home() {
  return (
    <div className={styles.topo}>
      <Logo />

      <Tema />
    </div>
  );
}
