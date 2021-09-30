import React from "react";

export const EditOnGitHubInvite = ({ path }) => {
  return (
    <section>
      <hr />
      <p>
        Spotted a typo?{" "}
        <a href={`https://github.com/LL782/laurence-lord/edit/main${path}`}>
          Edit on Github
        </a>
      </p>
    </section>
  );
};
