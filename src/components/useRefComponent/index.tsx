import React from 'react';
import './index.css';
import { PostComponent, PostProps } from './PostComponent';

/**
 * Utiliza-se o useRef quando queremos pegar a referênca de algum elemento da DOM
 * para manipular de alguma forma dentro do react.
 * Sempre que usar o useRef, deve-se acessar a propriedade current para ter acesso
 * às propriedades deste elemento.
 */

export const UseRefComponent: React.FC = () => {
  console.log('pai renderizou');

  const input = React.useRef<HTMLInputElement>(null);
  const contador = React.useRef<number>(0);
  const [posts, setPosts] = React.useState<PostProps[]>([]);
  const [value, setValue] = React.useState<string>('');

  React.useEffect(() => {
    contador.current++;
  });

  React.useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((data) => data.json())
        .then((response) => setPosts(response));
    }, 1200);
  }, []);

  React.useEffect(() => {
    input?.current && input.current.focus();
  }, [value]);

  const postHandleClick = (value: string) => {
    setValue(value);
  };

  return (
    <div className="posts">
      <h1>Renderizou: {contador.current}x</h1>
      <p className="search-container">
        Search: <input type="search" value={value} onChange={(e) => setValue(e.target.value)} ref={input} />
      </p>
      {React.useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => <PostComponent key={post?.id} {...post} titleClick={postHandleClick} />)
        );
      }, [posts])}

      {!posts.length && <div className="no-content">Carregando posts...</div>}
    </div>
  );
};
