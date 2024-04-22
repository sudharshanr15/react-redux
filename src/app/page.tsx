import Image from "next/image";
import styles from "./page.module.css";
import Counter from "@/components/Counter";

export default function Home() {
  /*
  * Redux main concepts
  * 1. Store
  * 2. Actions
  * 3. Reducers
  */
  return (
    <Counter />
  );
}
