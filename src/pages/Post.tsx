import { useEffect, useState } from "react";
import rangeParser from "parse-numeric-range";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

// import rangeParser from "parse-numeric-range";
import { useTheme } from "styled-components";

import { PostInfo } from "../components/PostInfo";

type PostParams = {
  slug: string;
};

export interface PostStateProps {
  title: string;
  user: { login: string };
  body: string;
  comments: number;
  html_url: string;
  created_at: string;
}

export function Post() {
  const { slug } = useParams<PostParams>();
  const {colors} = useTheme()
  const [post, setPost] = useState<PostStateProps>({} as PostStateProps);

  console.log(`body: `,post?.body)

  useEffect(() => {
    fetch(
      `https://api.github.com/repos/gabriel-devco/github-blog/issues/${slug}`
    )
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  console.log(post);

  return (
    <div>
      <PostInfo {...post} />
      <ReactMarkdown
        children={post?.body}
        className="line-break"
        components={{
          code({ node, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");

            if (!match) {
              return <code className={className} {...props} />;
            }

            const meta = node?.data?.meta as string | undefined;

            const applyHighlights: lineTagPropsFunction = highlights => {
              if (!meta) {
                return {};
              }

              const regex = /{([\d,-]+)}/;
              const metadata = meta.replace(/\s/g, "");
              const strlineNumbers = regex.test(metadata)
                ? regex.exec(metadata)![1]
                : "0";

              const highlightLines = rangeParser(strlineNumbers);
              const data = highlightLines.includes(highlights)
                ? "highlight"
                : undefined;

              return { data };
            };

            return (
              <SyntaxHighlighter
                language={match[1]}
                PreTag="div"
                className="codeStyle"
                showLineNumbers
                wrapLines={!!meta}
                useInlineStyles
                lineProps={applyHighlights}
                children={String(children).replace(/\s$/g, "")}
                style={
                  {
                    ...oneDark,
                    'code[class*="language-"]': {
                      ...oneDark['code[class*="language-"]'],
                      backgroundColor: colors.post,
                      color: colors.markdown,
                    },
                    'pre[class*="language-"]': {
                      ...oneDark['pre[class*="language-"]'],
                      backgroundColor: colors.post,
                      color: colors.markdown,
                    },
                  } as any
                }
                {...props}
              />
            );
          },
        }}
      />
    </div>
  );
}
