import Image from "next/image";
import styles from "./postUser.module.css";
import { getUser } from "@/lib/data";

const PostUser = async ({ userId }) => {
  const user = await getUser(userId);

  console.log("user id is", user);
  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={
          user.img
            ? user.img
            : "https://images.pexels.com/photos/17652903/pexels-photo-17652903/free-photo-of-naomi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        alt=""
        width={50}
        height={50}
      />

      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
