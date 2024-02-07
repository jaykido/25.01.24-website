import { handleGitHubLogin } from "@/lib/actions";
import { login } from "@/lib/actions";

const LoginPage = () => {
  // const session = await auth();

  return (
    <div>
      <form action={handleGitHubLogin}>
        <button>Login using github</button>
      </form>
      <form action={login}>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
