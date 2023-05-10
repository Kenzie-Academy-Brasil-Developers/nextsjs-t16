import { ReactNode } from "react";

interface ILayouPostProps {
    children: ReactNode;
}

export default function LayoutPost({ children }: ILayouPostProps) {
  return (
    <>
      <header>Tsunode Blog</header>
      <main>{children}</main>
    </>
  );
}
