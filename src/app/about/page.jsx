import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About Page Design",
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subTitle}>About SMA</h2>
        <h1 className={styles.title}>
          We Make your Digital Community Space & Ideas come to Life!
        </h1>
        <p className={styles.description}>
          Sosho Media Agency Africa is an award winning digital marketing agency
          based in Nakuru, Kenya. We bring our passion, creativity and clearly
          defined processes to work and let that transform into innovative
          digital campaigns, results focused and visually appealing website
          designs, search campaigns, display campaigns, social media campaigns,
          branding and more. We find our growth in our client&apos;s growth. We
          hold ourselves to the highest standards of service levels and creative
          excellence. We design to drive results and win awards and every client
          engagement is an opportunity to win. Regardless of the size of
          engagement, every client of ours can expect the best creatives and
          customer service from the committed team atSosho Media Agency, Kenya.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h2>3++</h2>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h2>3++</h2>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h2>3+ and Counting</h2>
            <p>Years of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          alt="Picture of the author"
          fill
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default AboutPage;
