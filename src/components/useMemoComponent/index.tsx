import React from 'react';
import './index.css';
import { PostComponent, PostProps } from './PostComponent';

/**
 * useMemo, assim como useCallback é utilizado para melhorar a performance.
 * enquanto o useCallback guarda em 'cache' as funções, o useMemo guarda valores (components, etc).
 * Necessário avaliar se é viável a utilização, pois às vezes pode ser mais custoso
 * salvar a função em memória do que cria-la novamente.
 */

export const UseMemoComponent: React.FC = () => {
  console.log('pai renderizou');

  const [posts, setPosts] = React.useState<PostProps[]>([]);
  const [value, setValue] = React.useState<string>('');

  React.useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((data) => data.json())
        .then((response) => setPosts(response));
    }, 3500);
  }, []);

  return (
    <div className="posts">
      <p className="search-container">
        Search: <input type="search" value={value} onChange={(e) => setValue(e.target.value)} />
      </p>
      {React.useMemo(() => {
        return posts.length > 0 && posts.map((post: PostProps) => <PostComponent key={post.id} {...post} />);
      }, [posts])}

      {!posts.length && <div className="no-content">Carregando posts...</div>}
    </div>
  );
};
