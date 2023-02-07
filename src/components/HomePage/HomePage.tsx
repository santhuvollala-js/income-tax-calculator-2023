import React, { FC } from "react";
import styles from "./HomePage.module.scss";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => (
  <div className={styles.HomePage} data-testid="HomePage">
    <h1>IncomeTax Calculator - 2023</h1>
    <h3>
      As there are slight changes in Income Tax NEW regime in India Budget 2023, this tool helps you to calculate your income tax based on your investments
      and choose OLD vs NEW tax regimes.
    </h3>
  </div>
);

export default HomePage;
