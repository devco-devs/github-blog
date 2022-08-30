import { ReactNode } from "react";
import { Anchor, LinkContainer } from "./styles";

interface LinkProps {
  href: string;
  children: string;
}

export function Link({href, children}: LinkProps) {
  return(
    <LinkContainer>
    <Anchor href={href}>{children}</Anchor>
    <img src="/src/assets/icons/arrow-up-square.svg" alt="Square with arrow pointing up" />
    </LinkContainer>
  )
}