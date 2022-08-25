import { useEffect, useState } from "react";
import { Link } from "../Link";
import { ProfileContainer, ProfileContent, ProfileHeader, ProfileInfo, ProfileInfoItem } from "./styles";

interface UserProps {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  company: string;
  followers: number;
}

export function Profile() {
  const [user, setUser] = useState<UserProps>({} as UserProps)
  
  useEffect(() => {
    fetch('https://api.github.com/users/gaprados')
    .then(res => res.json())
    .then(data => setUser(data));
  },[])


  return (
    <ProfileContainer>
      <img src="https://github.com/gaprados.png" />
      <ProfileContent>
        <ProfileHeader>
          <span>{user.name}</span>
          <Link href="https://github.com/gaprados ">github</Link>
        </ProfileHeader>
        <span>{user.bio}</span>

        <ProfileInfo>
          <ProfileInfoItem>
            <img src="src/assets/icons/github.svg" />
            <span>{user.login}</span>
          </ProfileInfoItem>

          <ProfileInfoItem>
            <img src="src/assets/icons/building.svg" />
            <span>{user.company}</span>
          </ProfileInfoItem>

          <ProfileInfoItem>
            <img src="src/assets/icons/people.svg" />
            <span>{user.followers}</span>
          </ProfileInfoItem>
        </ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  )
}