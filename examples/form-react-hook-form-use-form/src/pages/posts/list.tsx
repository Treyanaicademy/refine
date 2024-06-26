import { useTable, useNavigation } from "@refinedev/core";

import type { IPost } from "../../interfaces";

export const PostList: React.FC = () => {
  const { result } = useTable<IPost>({
    initialSorter: [
      {
        field: "id",
        order: "desc",
      },
    ],
  });
  const { edit, create } = useNavigation();

  const posts = result?.data || [];

  return (
    <div>
      <button onClick={() => create("posts")}>Create Post</button>
      <table>
        <thead>
          <td>ID</td>
          <td>Title</td>
          <td>Actions</td>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>
                <button onClick={() => edit("posts", post.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
