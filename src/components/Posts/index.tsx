import { useEffect, useState } from "react";
import { PostCard } from "../PostCard";
import { SearchInput } from "../SearchInput";

import { PostsContainer, PostsHeader, PostListContainer } from "./styles";

const POSTCARD_MOCK = {
  slug: '',
  title: 'JavaScript data types and data structures',
  description: "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.Dynamic typingJavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types: let foo = 42; // foo is now a number foo = 'bar'; // foo is now a string foo = true; // foo is now a boolean",
  date: 'Há 1 dia'
}

export interface PostProps {
  title: string;
  number: number;
  body: string;
  updated_at: string;
}

export function Posts() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  useEffect(() => {
    fetch('https://api.github.com/repos/gabriel-devco/github-blog/issues')
    .then(res => res.json())
    .then(data => setPosts(data));
  },[])

  return(
    <PostsContainer>
      <PostsHeader>
      <h1>Publicações</h1>
      {/*  TODO: TORNAR DINÂMICO */}
      <span>{posts.length} publicações</span>
      </PostsHeader>

      {/*  TODO: IMPLEMENTAR FUNCIONALIDADE DE SEARCH */}
      <SearchInput />

{/*  TODO: TRAZER DADOS DA REQUISIÇÃO */}
      <PostListContainer>
        {posts.map(post => (
          <PostCard {...post} />
        ))}
      </PostListContainer>
    </PostsContainer>
  )
}