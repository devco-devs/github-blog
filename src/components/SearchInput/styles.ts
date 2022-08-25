import styled from "styled-components";

export const TextInput = styled.input`
  width: 100%;
  margin: 0.75rem 0;
  border-radius: 6px;

  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.label};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.label};
  }
`;
