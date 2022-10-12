// https://nextjs.org/docs/advanced-features/security-headers
const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  //  https://scotthelme.co.uk/a-new-security-header-referrer-policy/
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  //  https://nextjs.org/docs/basic-features/environment-variables

  // {
  //   key: "Content-Security-Policy",
  //   value: process.env.NODE_ENV === "development" ? "*" : "default-src 'self'",
  // },
];
/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: async () => {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  reactStrictMode: true,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "pbs.twimg.com",
    ],
  },
};

module.exports = nextConfig;
