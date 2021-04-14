import React from "react";
import { Link } from "gatsby";

const NewerOlder = ({ allNotes, idOfCurrentPost }) => {
  const { length } = allNotes;

  if (length < 2) {
    return null;
  }

  const indexOfCurrent = allNotes.findIndex(({ id }) => id === idOfCurrentPost);

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
          <Link to={`/notes/${newer.slug}`}>Newer</Link>
        </p>
      ) : (
        <p>
          {" "}
          <Link disabled to="/">
            Newer
          </Link>{" "}
          (nothing newer)
        </p>
      )}
      {older ? (
        <p>
          <Link to={`/notes/${older.slug}`}>Older</Link>
        </p>
      ) : (
        <p>
          <Link disabled to="/">
            Older
          </Link>{" "}
          (nothing older)
        </p>
      )}
    </nav>
  );
};

export default NewerOlder;
