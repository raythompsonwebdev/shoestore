//import React from 'react';
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <main id="content" className="clearfix">
        <h1>Profile</h1>
        <br />

        <main id="context" className="group">
          <span className="context_title">
            <h2>{user.name}</h2>
            <h3>{JSON.stringify(user, null, 2)}</h3>
            <Image
              src={user.picture}
              alt="Profile"
              className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
            />
          </span>
        </main>

        <aside className="contact_sidebar">
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Morbi vel
            rutrum ante
          </p>
          <br />
          <p>
            Vivamus adipiscing tincidunt purus at adipiscing Proin orci metus,
            gravida in cursus et, egestas Suspendisse potenti
          </p>
          <br />
          <p>
            Vivamus congue sapien nec velit adipiscing a tincidunt Lorem ipsum
            dolor sit amet, consectetur adipiscing elit Nulla quis urna nisl
          </p>
          <br />
          <p>
            Nulla dolor magna, pretium ac elementum nec, tristique Sed lectus
            arcu, ultrices at mattis id, elementum in nisl Sed condimentum
            adipiscing urna, id venenatis ante
          </p>
          <br />
        </aside>
      </main>
    )
  );
}

export const getServerSideProps = withPageAuthRequired();
