import { h, JSX } from 'preact';
import { useMemo } from 'preact/hooks';
import { styled } from 'goober';

import { getPostList } from '../../service/post-list/index';

import { MiniPost } from './mini-post/component';

const Wrapper = styled<JSX.HTMLAttributes<HTMLDivElement>>('div')`
`;

interface IProps {
  path: string;
}

export const MainPage = ({}: IProps) => {
  const postList = useMemo(getPostList, []);
  
  return (
    <Wrapper className="h-feed">
      {
        postList.map((post)=> (
          <MiniPost key={post.url} name={post.title} time={post.time} url={post.url} timeFormat={post.timeFormated}/>
        ))
      }
    </Wrapper>
  );
}
