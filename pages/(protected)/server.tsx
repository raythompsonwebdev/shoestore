import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import Layout from "../../components/Layout";
import type { GetServerSidePropsContext } from "next";
import type { Session } from "next-auth";

export default function ServerSidePage( props : any ) {
  // As this page uses Server Side Rendering, the `session` will be already
  // populated on render without needing to go through a loading stage.
  const {result } = props;

  return (
    <Layout>

<main id="main-content" className="clearfix">
<h1 id="main-content-title">Server Side Rendering</h1>
      <p>
        This page uses the <strong>getServerSession()</strong> method in{" "}
        <strong>getServerSideProps()</strong>.
      </p>
      <p>
        Using <strong>getServerSession()</strong> in{" "}
        <strong>getServerSideProps()</strong> is the recommended approach if you
        need to support Server Side Rendering with authentication.
      </p>
      <p>
        The advantage of Server Side Rendering is this page does not require
        client side JavaScript.
      </p>
      <p>
        The disadvantage of Server Side Rendering is that this page is slower to
        render.
      </p>
      <pre>{JSON.stringify(result, null, 2)}</pre>
      </main>
    </Layout>
  );
}
// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context: GetServerSidePropsContext) {


  const session :Session | null = await getServerSession(context.req, context.res, authOptions);

  //user image in user object inside the session object is undefined -
  // causing Error Serializing as JSON - JSON stringyfied session object.
  const result = JSON.parse(JSON.stringify(session));

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      result

    },
  };
}
