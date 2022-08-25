import styled from "styled-components";

export const PostsContainer = styled.div`
display: flex;
flex-direction: column;
padding: 72px 0;
`;

export const PostsHeader = styled.header`
display: flex;
justify-content: space-between;

h1 {
  font-weight: 700;
  font-size: 1.125rem;
  color: ${({theme}) => theme.colors.subtitle}
}

span {
  font-size: 0.875rem;
  color: ${({theme}) => theme.colors.span}
}
`;

export const PostListContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 32px;
`;