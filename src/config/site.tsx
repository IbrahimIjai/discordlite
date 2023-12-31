import { LucidIcon, Icons } from "@/components/Icons";
import { LucideIcon } from "lucide-react";
import React from "react";
export const NavLinks = [
  { title: "Home", href: "/", isButton: false },
  { title: "Download", href: "/download", isButton: false },
  { title: "Nitro", href: "/nitro", isButton: false },
  { title: "Discover", href: "/discover", isButton: false },
  { title: "Safety", href: "/safety", isButton: true },
  { title: "Support", href: "/support", isButton: false },
  {
    title: "Blog",
    href: "https://blog.discord.com",
    external: true,
    isButton: false,
  },
  {
    title: "Careers",
    href: "https://discord.com/jobs",
    external: true,
    isButton: false,
  },
] satisfies NavItem[];

export const FeaturesList = [
  {
    title: "Create an invite-only place where you belong",
    description:
      "Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.",
    icons: "/assets/feature-study-group.svg",
  },
  {
    title: "Where hanging out is easy",
    description:
      "Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.",
    icons: "/assets/feature-voice-channel.svg",
    isGrayBg: true,
  },
  {
    title: "From few to a fandom",
    description:
      "Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.",
    icons: "/assets/feature-fandom.svg",
  },
] satisfies AppFeature[];

export const socialLinks = [
  {
    title: "Twitter",
    href: "https://twitter.com/discord",
    icon: Icons.twitter,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/discord/",
    icon: Icons.instagram,
  },
  {
    title: "facebook",
    href: " https://www.facebook.com/discord/",
    icon: Icons.facebook,
  },
  {
    title: "youtube",
    href: "https://www.youtube.com/discord/",
    icon: Icons.youtube,
  },
  {
    title: "tiktok",
    href: " https://www.tiktok.com/@discord",
    icon: Icons.tiktok,
  },
] satisfies SocialLink[];

export const footerLinks: FooterSection[] = [
  {
    section: "Product",
    items: [
      { item: "Product", link: "/" }, // Assuming root link for "Product"
      { item: "Download", link: "/download" },
      { item: "Nitro", link: "/nitro" },
      { item: "Status", link: "/status" },
      { item: "App Directory", link: "/app-directory" },
      { item: "New Mobile Experience", link: "/mobile" },
    ],
  },
  {
    section: "Company",
    items: [
      { item: "About", link: "/about" },
      { item: "Jobs", link: "/jobs" },
      { item: "Brand", link: "/brand" },
      { item: "Newsroom", link: "/newsroom" },
      { item: "Fall Release", link: "/fall-release" },
    ],
  },
  {
    section: "Resources",
    items: [
      { item: "College", link: "/college" },
      { item: "Support", link: "/support" },
      { item: "Safety", link: "/safety" },
      { item: "Blog", link: "/blog" },
      { item: "Feedback", link: "/feedback" },
      { item: "StreamKit", link: "/streamkit" },
      { item: "Creators", link: "/creators" },
      { item: "Community", link: "/community" },
      { item: "Developers", link: "/developers" },
      { item: "Gaming", link: "/gaming" },
      { item: "Official 3rd Party Merch", link: "/merch" },
    ],
  },
  {
    section: "Policies",
    items: [
      { item: "Terms", link: "/terms" },
      { item: "Privacy", link: "/privacy" },
      { item: "Cookie Settings", link: "/cookie-settings" },
      { item: "Guidelines", link: "/guidelines" },
      { item: "Acknowledgements", link: "/acknowledgements" },
      { item: "Licenses", link: "/licenses" },
      { item: "Company Information", link: "/company-info" },
    ],
  },
];

//types

interface FooterSection {
  section: string;
  items: FooterItem[];
}

interface FooterItem {
  item: string;
  link: string;
}

export type SocialLink = {
  title: string;
  href: string;
  icon?: LucidIcon | LucideIcon;
};
export type NavItem = {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  isButton?: boolean;
};

export type AppFeature = {
  title: string;
  description: string;
  icons: string;
  isGrayBg?: boolean;
};
