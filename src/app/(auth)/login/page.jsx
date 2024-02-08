import LoginForm from "@/components/loginForm/loginForm";
import { handleGitHubLogin } from "@/lib/actions";
import { login } from "@/lib/actions";
import styles from "./login.module.css";

const LoginPage = () => {
  // const session = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGitHubLogin}>
          <button className={styles.github}>Login using github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
