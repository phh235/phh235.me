import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Huy Hoàng",
  lastName: "Phan",
  displayName: "Huy Hoàng",
  username: "phh235",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Creating with code. Small details matter.",
    "Frontend Developer",
    "Open Source Contributor",
  ],
  address: "Ho Chi Minh City, Viet Nam",
  phoneNumber: "Kzg0IDM1NSA2NzAgODc1", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "cGhhbmh1eWhvYW5nLmRldkBnbWFpbC5jb20=", // base64 encoded
  website: "https://bento.me/phh235",
  jobTitle: "Frontend Developer",
  jobs: [
    {
      title: "Fresher Frontend Developer",
      company: "AUBE",
      website: "https://google.com/",
    },
    {
      title: "Lead Frontend Developer",
      company: "Tan Hung Parish",
      website: "https://google.com/",
    },
  ],
  about: `
  Hello, World! I am Huy Hoàng — a Frontend Developer passionate about creating high-performance, user-centric software solutions with intuitive and engaging designs.

  With 1.5+ years of experience, I specialize in building high-quality web and mobile applications using Next.js, React, Vue.js, TypeScript, and modern front-end technologies. Beyond work, I love exploring new technologies and turning ideas into reality through personal projects.

  Let's connect and collaborate!
  `,
  avatar: "https://avatars.githubusercontent.com/u/121915529?v=4",
  ogImage: "https://avatars.githubusercontent.com/u/121915529?v=4",
  namePronunciationUrl: "/audio/huyhoang.mp3",
  keywords: [
    "phh235",
    "phanhuyhoang",
    "phan huy hoang",
    "huyhoang",
    "huy honag",
    "phh235",
    "phan huy Hoàng",
    "huy Hoàng",
  ],
  dateCreated: "2025-11-07", // YYYY-MM-DD
};
