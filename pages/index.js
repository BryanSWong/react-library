import Head from "next/head";
import Image from "next/image";
import Router from "next/router";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div>
      <div>
        <h1>Welcome to React Library</h1>
        <button type="button" onClick={() => Router.push("/private")}>
          Log in
        </button>
      </div>
    </div>
  );
};

export default Home;
