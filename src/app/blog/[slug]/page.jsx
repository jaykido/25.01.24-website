import Image from "next/image";
import styles from "./singlePage.module.css";
import { getPost } from "@/lib/data";

const SinglePostPage = async ({ params }) => {
  const slug = params;
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.theImg} />
        </div>
      )}
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
            <span className={styles.detailValue}>
              {post.createdAt.toString()}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};
export default SinglePostPage;
