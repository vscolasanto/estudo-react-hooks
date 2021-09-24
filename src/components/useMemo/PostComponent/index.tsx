export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId?: number;
}

export const PostComponent: React.FC<PostProps> = ({ ...post }) => {
  console.log('posts renderizou');
  return (
    <div>
      <h1 className="title">
        {post.id} - {post.title}
      </h1>
      <p>{post.body}</p>
    </div>
  );
};
