import styled from "styled-components";

export const ProfileContainer = styled.div`
margin: 0 auto;
margin-top: -6rem;

max-width: 864px;
padding: 32px;
display: flex;
gap: 32px;
border-radius: 10px;
background-color: ${({theme}) => theme.colors.profile};

> img {
  width: 148px;
  height: 148px;
  border-radius: 8px;
}
`;

export const ProfileHeader = styled.header`
display: flex;
justify-content: space-between;

> span {
  color: ${({theme}) => theme.colors.title};
  font-size: 1.5rem;
}
`;

export const ProfileContent = styled.div`
display: flex;
flex-direction: column;
gap: 16px;

> span {
  color: ${({theme}) => theme.colors.text};
  margin-bottom: 16px;
}
`;

export const ProfileInfo = styled.div`
display: flex;
gap: 24px;
`;

export const ProfileInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 18px;
    height: 18px;
  }
  span {
    color: ${({ theme }) => theme.colors.subtitle};
  }
`;
