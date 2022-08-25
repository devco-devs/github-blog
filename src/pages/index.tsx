import { Posts } from "../components/Posts";
import { Profile } from "../components/Profile";
import { DefaultLayout } from "../layout/DefaultLayout";

export function Home() {
  return(
    <DefaultLayout>
      <Profile />
      <Posts />
    </DefaultLayout>
  )
}