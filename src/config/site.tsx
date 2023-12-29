import { LucidIcon, Icons } from "@/components/Icons";
  
export const NavLinks = [
  { title: "Home", href: "/", isButton: false },
  { title: "Download", href: "/download", isButton: false },
  { title: "Nitro", href: "/nitro", isButton: true },
  { title: "Discover", href: "/discover", isButton: false },
  { title: "Safety", href: "/safety", isButton: false },
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
      "Grab a seat in a voice channel when you\’re free. Friends in your server can see you\’re around and instantly pop in to talk without having to call.",
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
    icon: Icons.twitter 
  }
] satisfies SocialLink[]



//types

export type SocialLink ={
 title:string
 href: string
 icon?: LucidIcon
}
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
