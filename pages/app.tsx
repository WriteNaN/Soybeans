import Head from "next/head";
import styles from "@/styles/App.module.css";
import Navbar from "@/components/Dashboard/Navbar";

export default function App() {
  return (
    <div>
      <Head>
        <title>Soybeans Finance - Dashboard</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <div id="dashboard-gui" className={styles['dashboard']}>
        <Navbar />
      </div>
    </div>
  );
}
