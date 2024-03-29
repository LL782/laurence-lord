import * as React from "react";

import { EditOnGitHubInvite } from "../../components/editOnGitHubInvite";
import { Layout } from "../../components/layout";
import { Seo } from "../../components/seo";
import { Link } from "gatsby";

const NotesIndexPage = () => {
  const experiments = [
    {
      date: "2021-10-11",
      path: "/labs/a-frame-001/",
      title: "A Frame 001",
    },
    {
      date: "2022-11-30",
      path: "/labs/LL782-poster/",
      title: "LL782 Poster",
    },
  ];

  return (
    <Layout>
      <Seo
        title="Lab experiments"
        description="Mini web apps exploring different web technology and visual effects in the browser. So far we have a couple of 3D tests, one with WebGL and one with pure CSS."
      />
      <h1>Laurence Lord Labs</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Experiment</th>
          </tr>
        </thead>
        <tbody>
          {experiments.map(({ date, path, title }) => (
            <tr>
              <td>
                <time datetime={date}>{date}</time>
              </td>
              <td>
                <a href={path} key={path}>
                  {title}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Things to know about these experiments</h2>
      <ul>
        <li>They are primarily here for my own interest</li>
        <li>Online they are easier to reference, test and [re]discover</li>
        <li>
          I've written more{" "}
          <Link to="/notes/i-am-writing-for-myself">
            about writing for myself
          </Link>{" "}
          here
        </li>
      </ul>

      <p></p>
      <EditOnGitHubInvite path={`/src/pages/labs/index.js`} />
    </Layout>
  );
};

export default NotesIndexPage;
