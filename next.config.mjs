/** @type {import('next').NextConfig} */
import MillionLint from '@million/lint';
import path from 'path';

const __dirname = path.resolve();

const nextConfig = {
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles/')],
  },
  compiler: {
    styledComponents: true,
  },
};

export default MillionLint.next({ rsc: true })(nextConfig);
