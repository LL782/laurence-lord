import type { ImageMetadata } from "astro";
import githubImage from "../assets/links/github.png";
import linkedinImage from "../assets/links/linkedin.jpg";
import instagramImage from "../assets/links/instagram.png";
import dc5bImage from "../assets/links/dc5b.png";

export type SiteLink = {
  title: string;
  href: string;
  body: string;
  image: ImageMetadata;
  imageAlt: string;
  external?: boolean;
};

export const siteLinks: SiteLink[] = [
  {
    title: "GitHub",
    href: "https://github.com/LL782",
    body: "Code, experiments and the open trail of how things get built — repos, issues and the work in progress.",
    image: githubImage,
    imageAlt: "Abstract mark used across Laurence Lord projects",
    external: true,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/ll782",
    body: "Professional context: roles, collaborations and the through-line between craft, product and business.",
    image: linkedinImage,
    imageAlt: "Soft-focus desk scene suggesting focused professional work",
    external: true,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/laurence_lord_art/",
    body: "Drawings, ink and visual experiments — art made by hand, shared as it forms.",
    image: instagramImage,
    imageAlt: "Crop of black ink artwork with branches, flowers and masked faces",
    external: true,
  },
  {
    title: "DC5B",
    href: "https://www.dc5b.com/",
    body: "A personal business practice for turning creative ideas into money — and testing how that life is run.",
    image: dc5bImage,
    imageAlt: "Stylised poster artwork associated with the DC5B project",
    external: true,
  },
];
