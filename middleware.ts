import { rewrite } from '@vercel/edge'

export default function middleware(request: Request) {
  const url = new URL(request.url)
  const hostname = request.headers.get('host')
  const path = url.pathname

  if (hostname === 'docs.nicolas-vigier.com') {
    console.log(`Rewriting /docs${path}`)
    console.log(`URL: ${new URL(`/docs${path}`, request.url)}`)
    return rewrite(new URL(`/docs${path}`, request.url))
  }

  if (hostname === 'careers.nicolas-vigier.com') {
    console.log(`Rewriting /careers${path}`)
    console.log(`URL: ${new URL(`/careers${path}`, request.url)}`)
    return rewrite(new URL(`/careers${path}`, request.url))
  }

  if (hostname === 'blog.nicolas-vigier.com') {
    console.log(`Rewriting /blog${path}`)
    console.log(`URL: ${new URL(`/blog${path}`, request.url)}`)
    return rewrite(new URL(`/blog${path}`, request.url))
  }
}
