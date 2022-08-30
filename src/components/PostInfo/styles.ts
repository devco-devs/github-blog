import styled from "styled-components";

export const PostContainer = styled.div`
  margin: 0 auto;
  margin-top: -6rem;

  padding: 32px;
  display: flex;
  gap: 32px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.profile};
`;

export const PostHeader = styled.header`
  width: 100%;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    img {
      width: 12px;
      height: 12px;
      margin-right: 0.5rem;
    }

    button {
      cursor: pointer;
      display: flex;
      align-items: center;
      background: none;
      border: none;
      font-weight: 700;
      font-size: 0.75rem;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.primary};

      &:hover {
        text-decoration: underline;
      }
    }
  }

  > span {
    color: ${({ theme }) => theme.colors.title};
    font-size: 1.5rem;
  }
`;

export const PostContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  > span {
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 16px;
  }
`;

export const PostContainerInfo = styled.div`
  display: flex;
  gap: 24px;
`;

export const PostInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 18px;
    height: 18px;
  }
  span {
    color: ${({ theme }) => theme.colors.label};
  }
`;
