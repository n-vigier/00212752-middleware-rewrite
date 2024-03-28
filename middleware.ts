import { rewrite } from '@vercel/edge';

export default function middleware(request: Request) {
  const url = new URL(request.url);
  const hostname = request.headers.get('host');
  const path = url.pathname;

  url.hostname = 'rewrite.nicolas-vigier.com';

  if (hostname === 'docs.nicolas-vigier.com') {
    console.log(`Rewriting /docs${path}`);
    url.pathname = `/docs${path}`;
    console.log(`URL: ${url.href}`);
    return rewrite(url);
  }

  if (hostname === 'careers.nicolas-vigier.com') {
    console.log(`Rewriting /careers${path}`);
    url.pathname = `/careers${path}`;
    console.log(`URL: ${url.href}`);
    return rewrite(url);
  }

  if (hostname === 'blog.nicolas-vigier.com') {
    console.log(`Rewriting /blog${path}`);
    url.pathname = `/blog${path}`;
    console.log(`URL: ${url.href}`);
    return rewrite(url);
  }
}

export const config = {
  matcher: ['/((?!api|_astro/|favicon.svg).*)'],
};
