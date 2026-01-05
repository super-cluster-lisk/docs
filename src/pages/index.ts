import type { ReactNode } from "react";
import { useEffect } from "react";
import { useHistory } from "@docusaurus/router";

export default function Home(): ReactNode {
  const history = useHistory();

  useEffect(() => {
    history.push("/introduction/overview");
  }, [history]);

  return null;
}
