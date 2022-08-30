import { useNavigate } from "react-router-dom";
import type { PostStateProps } from "../../pages/Post";
import { Link } from "../Link";
import {
  PostContainer,
  PostContainerInfo,
  PostContent,
  PostHeader,
  PostInfoItem,
} from "./styles";

export function PostInfo({
  title,
  user,
  comments,
  created_at,
  html_url,
}: PostStateProps) {
  const navigate = useNavigate();
  return (
    <PostContainer>
      <PostContent>
        <PostHeader>
          <div>
            <button onClick={() => navigate(-1)}>
              <img src="/src/assets/icons/chevron-left.svg" />
              Voltar
              </button>
            <Link href={html_url}>ver no github</Link>
          </div>
          <span>{title}</span>
        </PostHeader>

        <PostContainerInfo>
          <PostInfoItem>
            <img src="/src/assets/icons/github.svg" />
            <span>{user?.login}</span>
          </PostInfoItem>

          <PostInfoItem>
            <img src="/src/assets/icons/calendar.svg" />
            <span>{created_at}</span>
          </PostInfoItem>

          <PostInfoItem>
            <img src="/src/assets/icons/comment.svg" />
            <span>{comments}</span>
          </PostInfoItem>
        </PostContainerInfo>
      </PostContent>
    </PostContainer>
  );
}
