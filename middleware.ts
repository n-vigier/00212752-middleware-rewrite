import { rewrite } from '@vercel/edge';

export default function middleware(request: Request) {
  const url = new URL(request.url);
  const hostname = request.headers.get('host');
  const path = url.pathname;
  console.log({ url: JSON.stringify(url, null, 2), hostname, path });

  if (hostname === 'docs.nicolas-vigier.com') {
    console.log(`Rewriting /docs${path}`);
    url.hostname = '00212752-middleware-rewrite.vercel.app';
    console.log(`URL: ${new URL(`/docs${path}`, url)}`);
    return rewrite(new URL(`/docs${path}`, url));
  }
  console.log('Docs not matched');

  if (hostname === 'careers.nicolas-vigier.com') {
    console.log(`Rewriting /careers${path}`);
    url.hostname = '00212752-middleware-rewrite.vercel.app';
    console.log(`URL: ${new URL(`/careers${path}`, url)}`);
    return rewrite(new URL(`/careers${path}`, url));
  }
  console.log('Careers not matched');

  if (hostname === 'blog.nicolas-vigier.com') {
    console.log(`Rewriting /blog${path}`);
    url.hostname = '00212752-middleware-rewrite.vercel.app';
    console.log(`URL: ${new URL(`/blog${path}`, url)}`);
    return rewrite(new URL(`/blog${path}`, url));
  }

  console.log('Blog not matched');
}

export const config = {
  matcher: ['/((?!api|_astro/|favicon.svg).*)'],
};
