import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "./layout/DefaultLayout";
import { Home, Post } from "./pages";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:slug" element={<Post />} />
      </Route>
    </Routes>
  );
}
