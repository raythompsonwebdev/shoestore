import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Layout from "../components/Layout";
import AccessDenied from "../components/access-denied";
import Head from "next/head";
// import Image from "next/image";

export default function Profile(props: { user: any }) {
  const { data: session } = useSession();
  const [content, setContent] = useState();

  // Fetch content from protected route
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/examples/protected");
      const json = await res.json();
      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  // If no session exists, display access denied message
  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    );
  }

  return (
    <Layout>
      <>
        <Head>
          <title>Contact Us</title>
          <meta name="description" content="Contact us page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main id="main-content" className="clearfix">
          <h1 id="main-content-title">Profile</h1>
          <br />

          <main id="main-inner-content" className="group">
            <span className="context_title">
              {/* <Image
                  // src={`${user.picture}`}
                  alt="Profile"
                  width="50"
                  height="50"
                /> */}
            </span>
          </main>

          <aside className="contact-sidebar">
            <br />
            <p>{content ?? "\u00a0"}</p>
            {/* <p>{user.name}</p>
              <br />
              <p>{user.nickname}</p>
              <br />
              <p>{user.updated_at}</p>
              <br />
              <p>{user.email}</p> */}
            <br />
          </aside>
        </main>
      </>
    </Layout>
  );
}

//export const getServerSideProps = withPageAuthRequired();
