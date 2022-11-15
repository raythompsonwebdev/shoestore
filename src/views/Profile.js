import React from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";

// eslint-disable-next-line func-style
function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }
  return (
    isAuthenticated && (
      <main id="main-content" className="clearfix">
        <h1 className="main-content-title">Profile</h1>
        <br />

        <main id="context" className="group">
          <span className="context_title">
            <h2>{user.name}</h2>
            {/* <h3>{JSON.stringify(user, null, 2)}</h3> */}
            <h3>{user.email}</h3>
            <img
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

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading />,
});
