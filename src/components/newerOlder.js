import React from "react";
import { Link } from "gatsby";

const NewerOlder = ({ allNotes, idOfCurrentNote }) => {
  const { length } = allNotes;

  if (length < 2) {
    return null;
  }

  const indexOfCurrent = allNotes.findIndex(({ id }) => id === idOfCurrentNote);

  const olderIndex = indexOfCurrent + 1;
  const newerIndex = indexOfCurrent - 1;

  const older = olderIndex < length ? allNotes[olderIndex] : null;
  const newer = newerIndex > -1 ? allNotes[newerIndex] : null;

  return (
    <nav>
      <p>
        <Link to="/notes">All notes</Link>
      </p>
      {newer ? (
        <p>
          <Link to={`/notes/${newer.slug}`} title={newer.frontmatter.title}>
            Newer
          </Link>
        </p>
      ) : (
        <p>
          <Link to="/" title="Link to homepage">
            <s>Newer</s>
          </Link>{" "}
          (nothing newer)
        </p>
      )}
      {older ? (
        <p>
          <Link to={`/notes/${older.slug}`} title={older.frontmatter.title}>
            Older
          </Link>{" "}
          <small>"{older.frontmatter.title}"</small>
        </p>
      ) : (
        <p>
          <Link to="/" title="Link to homepage">
            <s>Older</s>
          </Link>{" "}
          (nothing older)
        </p>
      )}
    </nav>
  );
};

export default NewerOlder;
