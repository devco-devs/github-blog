import styled from "styled-components";

export const LinkContainer = styled.div`
display: flex;
align-items: center;
gap: 8px;

img {
  width: 12px;
  height: 12px;
}
`

export const Anchor = styled.a`
font-weight: 700;
font-size: 0.75rem;
text-decoration: none;
text-transform: uppercase;
color: ${({theme}) => theme.colors.primary};

&:hover {
  text-decoration: underline;
}
`