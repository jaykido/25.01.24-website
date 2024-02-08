"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const addPost = async (formData) => {
  //   const title = formData.get("title");
  //   const desc = formData.get("description");
  //   const slug = formData.get("slug");

  const { title, desc, slug, userId } = Object.fromEntries(formData);

  //   console.log("form data", title, description, slug);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });
    await newPost.save();
    console.log("saved to database");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return { error: "Something doesnt seem right" };
  }
};

export const deletePost = async (formData) => {
  //   const title = formData.get("title");
  //   const desc = formData.get("description");
  //   const slug = formData.get("slug");

  const { id } = Object.fromEntries(formData);

  //   console.log("form data", title, description, slug);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("removed from database");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return { error: "Something doesnt seem right" };
  }
};

export const handleGitHubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const register = async (previousState, formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);
  console.log(username, email);

  if (password !== passwordRepeat) {
    return { error: "Passwords do no match. Re-check" };
  }

  try {
    connectToDb();

    const user = await User.findOne({ email: email });

    if (user) {
      return { error: "This account already exist" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });
    await newUser.save();
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);
  console.log(username, password);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error);

    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invalid Username or Password!" };
    }
    throw error;
  }
};
