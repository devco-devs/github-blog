import { PostCard } from "../PostCard";
import { SearchInput } from "../SearchInput";

import { PostsContainer, PostsHeader, PostListContainer } from "./styles";

export function Posts() {
  return(
    <PostsContainer>
      <PostsHeader>
      <h1>Publicações</h1>
      {/*  TODO: TORNAR DINÂMICO */}
      <span>6 publicações</span>
      </PostsHeader>

      {/*  TODO: IMPLEMENTAR FUNCIONALIDADE DE SEARCH */}
      <SearchInput />

{/*  TODO: TRAZER DADOS DA REQUISIÇÃO */}
      <PostListContainer>
        {[...Array(12).keys()].map(item => (
          <PostCard />
        ))}
      </PostListContainer>
    </PostsContainer>
  )
}