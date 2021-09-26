export interface PostProps {
  [key: string]: any;
  titleClick(event: any): any;
}

export const PostComponent: React.FC<PostProps> = (post) => {
  console.log('posts renderizou');
  return (
    <div>
      <h1 className="title" onClick={() => post.titleClick(post.title)}>
        {post.id} - {post.title}
      </h1>
      <p>{post.body}</p>
    </div>
  );
};
