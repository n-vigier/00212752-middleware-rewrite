import { rewrite } from '@vercel/edge'

export default function middleware(request: Request) {
  const url = new URL(request.url)
  const hostname = request.headers.get('host')
  const path = url.pathname
  console.log({url, hostname, path});
  

  if (hostname === 'docs.nicolas-vigier.com') {
    console.log(`Rewriting /docs${path}`)
    console.log(`URL: ${new URL(`/docs${path}`, request.url)}`)
    return rewrite(new URL(`/docs${path}`, request.url))
  }
  console.log('Docs not matched');
  

  if (hostname === 'careers.nicolas-vigier.com') {
    console.log(`Rewriting /careers${path}`)
    console.log(`URL: ${new URL(`/careers${path}`, request.url)}`)
    return rewrite(new URL(`/careers${path}`, request.url))
  }
  console.log('Careers not matched');

  if (hostname === 'blog.nicolas-vigier.com') {
    console.log(`Rewriting /blog${path}`)
    console.log(`URL: ${new URL(`/blog${path}`, request.url)}`)
    return rewrite(new URL(`/blog${path}`, request.url))
  }

  console.log('Blog not matched');

}

export const config = {
  matcher: ['/((?!api|_astro/|favicon.ico).*)'],
};