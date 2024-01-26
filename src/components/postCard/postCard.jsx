import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/post.png" alt="" className={styles.img} fill />
        </div>
        <span className={styles.date}>25.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.description}>Desc</p>
        <Link className={styles.Link} href="/blog/post">
          Load More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
