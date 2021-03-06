import { Link } from "gatsby";
import * as React from "react";

import { EditOnGitHubInvite } from "../../components/editOnGitHubInvite";
import { Layout } from "../../components/layout";
import { Seo } from "../../components/seo";

const NotesIndexPage = () => {
  const experiments = [
    {
      date: "2021-10-11",
      path: "/labs/a-frame-001/",
      title: "A Frame 001",
    },
    // {
    //   date: "2021-10-15",
    //   path: "/labs/a-frame-002-codurance-brand/",
    //   title: "A Frame 002 - Codurance Brand",
    // },
  ];

  return (
    <Layout>
      <Seo title="Lab work" />
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
        <li>Online they are easy to test</li>
        <li>One day there will be many of them</li>
      </ul>

      <p></p>
      <EditOnGitHubInvite path={`/src/pages/labs/index.js`} />
    </Layout>
  );
};

export default NotesIndexPage;
