import styled from "styled-components";
import { Link } from "react-router-dom";

export const PostCardContainer = styled(Link)`
padding: 32px;
display: flex;
flex-direction: column;
gap: 1.125rem;

border-radius: 10px;
text-decoration: none;
color: ${({theme}) => theme.colors.text};
background-color: ${({theme}) => theme.colors.post};
border: 2px solid transparent;

p {
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}

&:hover {
  border-color: ${({theme}) => theme.colors.label};
}
`

export const PostCardHeader = styled.header`
display: flex;
justify-content: space-between;

h1 {
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({theme}) => theme.colors.title};
  max-width: 70%;
}

span {
  font-size: 0.875rem;
  color: ${({theme}) => theme.colors.span};
}
`;