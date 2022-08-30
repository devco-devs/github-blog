
import type { PostProps } from "../Posts";
import { PostCardContainer, PostCardHeader } from "./styles";


export function PostCard({number, title, updated_at, body}: PostProps) {
  return(
    <PostCardContainer to={`/posts/${number}`}>
      <PostCardHeader>
        <h1>{title}</h1>
        <span>{updated_at}</span>
      </PostCardHeader>

      <p>{body}</p>
    </PostCardContainer>
  )
}