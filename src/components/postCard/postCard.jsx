import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img && (
          <div className={styles.imgContainer}>
            <Image src={post.img} alt="" className={styles.img} fill />
          </div>
        )}
        {post.img && (
          <span className={styles.date}>
            {post.createdAt.toString().slice(0, 16)}
          </span>
        )}
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.description}>{post.desc}</p>
        <Link className={styles.Link} href={`/blog/${post.slug}`}>
          Load More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
