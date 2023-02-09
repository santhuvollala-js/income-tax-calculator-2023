import { FC } from "react";
import styles from "./HomePage.module.scss";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => (
  <div className={styles.HomePage} data-testid="HomePage">
    <h1>IncomeTax Calculator - 2023</h1>
    <h4>
      As there are slight changes in Income Tax NEW regime in India Budget 2023, this tool calculates your income tax based on your investments
      and helps you choose between OLD vs NEW tax regimes.
    </h4>
  </div>
);

export default HomePage;
