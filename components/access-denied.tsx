import Link from "next/link";
import { signIn } from "next-auth/react";

export default function AccessDenied() {
  return (
    <main id="main-content" className="clearfix">
      <h1 id="main-content-title">Access Denied</h1>

      <p>
        <Link
          href="/api/auth/signin"
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
        >
          You must be signed in to view this page
        </Link>
      </p>
    </main>
  );
}
