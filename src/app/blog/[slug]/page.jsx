import Image from "next/image";
import styles from "./singlePage.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/post.png" alt="" fill />
      </div>
      <div className={styles.textContainer}>SinglePostPage</div>
    </div>
  );
};
export default SinglePostPage;
