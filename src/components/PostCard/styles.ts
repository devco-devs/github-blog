import styled from "styled-components";

export const PostCardContainer = styled.div`
padding: 32px;
display: flex;
flex-direction: column;
gap: 1.25rem;
border-radius: 10px;
color: ${({theme}) => theme.colors.text};
background-color: ${({theme}) => theme.colors.post};

p {
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
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