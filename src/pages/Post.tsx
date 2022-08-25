import { useParams } from 'react-router-dom';

type PostParams = {
  slug: string;
};

export function Post() {
  const { slug } = useParams<PostParams>();
  return(
    <div>
      <h1>Post Page</h1>
      <span>The post is: {slug}</span>
    </div>
  )
}