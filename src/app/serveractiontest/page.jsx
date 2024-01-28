import { addPost, deletePost } from "@/lib/actions";

const ServerActionTestPage = () => {
  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="Title" name="title" />
        <input type="text" placeholder="Description" name="desc" />
        <input type="text" placeholder="Slug" name="slug" />
        <input type="text" placeholder="UserId" name="userId" />
        <button>Create It!</button>
      </form>

      <form action={deletePost}>
        <input type="text" placeholder="postId" name="id" />
        <button>delete it!</button>
      </form>
    </div>
  );
};

export default ServerActionTestPage;
