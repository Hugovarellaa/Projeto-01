import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
              dicta
            </strong>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum,
              magnam ea mollitia ducimus, animi asperiores iure deleniti
              obcaecati libero voluptatibus, non vel laudantium natus facilis
              aperiam fugit? Quos, odio placeat?
            </p>
          </a>

          <a href="">
            <time>12 de março de 2021</time>
            <strong>Lorem ipsum dolor sit amet consectetur,</strong>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum,
              magnam ea mollitia ducimus, animi asperiores iure deleniti
              obcaecati libero voluptatibus, non vel laudantium natus facilis
              aperiam fugit? Quos, odio placeat?
            </p>
          </a>

          <a href="">
            <time>12 de março de 2021</time>
            <strong>Lorem ipsum dolor sit amet consectetur,</strong>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum,
              magnam ea mollitia ducimus, animi asperiores iure deleniti
              obcaecati libero voluptatibus, non vel laudantium natus facilis
              aperiam fugit? Quos, odio placeat?
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
