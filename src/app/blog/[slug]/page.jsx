import Image from "next/image";
import styles from "./singlePage.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/post.png" alt="" fill className={styles.theImg} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="/post.png"
            alt=""
            height={50}
            width={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Joe Muriu</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>27.01.24</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          facilis, vel libero sunt nesciunt a soluta totam laboriosam cumque
          sapiente possimus. Dignissimos facilis alias nam sit delectus adipisci
          ipsum facere accusantium fugiat, cupiditate quis illo voluptate sed a
          perspiciatis iste cumque expedita ratione provident blanditiis libero
          asperiores, minus temporibus debitis.
        </div>
      </div>
    </div>
  );
};
export default SinglePostPage;
