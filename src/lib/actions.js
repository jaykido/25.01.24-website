"use server";

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";

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
