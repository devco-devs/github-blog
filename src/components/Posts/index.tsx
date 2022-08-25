import { SearchInput } from "../SearchInput";
import { PostsContainer, PostsHeader, PostListContainer } from "./styles";

export function Posts() {
  return(
    <PostsContainer>
      <PostsHeader>
      <h1>Publicações</h1>
      <span>6 publicações</span>
      </PostsHeader>
      <SearchInput />

      <PostListContainer>
        {[...Array(12).keys()].map(item => (
          <div>
            <h1>Card</h1>
          </div>
        ))}
      </PostListContainer>
    </PostsContainer>
  )
}