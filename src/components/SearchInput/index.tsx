import { TextInput } from "./styles";

// https://api.github.com/search/issues?q=Lorem%20Ipsumrepo:gabriel-devco/github-blog

export function SearchInput() {
  return (
    <TextInput type="text" placeholder="Buscar conteúdo" />
  );
}