export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Mastering Discord Timestamps: A Comprehensive Guide",
    slug: "mastering-discord-timestamps",
    excerpt:
      "Learn everything you need to know about Discord timestamps, from basic formatting to advanced techniques for server management.",
    content:
      "## Introduction\n\nDiscord timestamps are a powerful feature that allows you to display dates and times that automatically adjust to each user’s local timezone. This is incredibly useful for coordinating events, setting reminders, and managing a global community.\n\n### Why Use Timestamps?\n\n- **Clarity:** Avoid timezone confusion by showing times in each user’s local format.\n- **Professionalism:** Make your announcements look clean and professional.\n- **Engagement:** Increase event participation by making it easy for users to know when to show up.",
    author: "Alex Lucia",
    date: "2025-10-15",
    readTime: "5 min read",
    category: "Discord",
    image: "/blog/1.jpg",
  },
];
