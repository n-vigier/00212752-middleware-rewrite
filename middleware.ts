import { rewrite } from '@vercel/edge'

export default function middleware(request: Request) {
  const url = new URL(request.url)
  const hostname = request.headers.get('host')
  const path = url.pathname

  if (hostname === 'docs.testdomain.co') {
    console.log(`Rewriting /docs${path}`)
    console.log(`URL: ${new URL(`/docs${path}`, request.url)}`)
    return rewrite(new URL(`/docs${path}`, request.url))
  }

  if (hostname === 'careers.testdomain.co') {
    console.log(`Rewriting /careers${path}`)
    console.log(`URL: ${new URL(`/docs${path}`, request.url)}`)
    return rewrite(new URL(`/careers${path}`, request.url))
  }

  if (hostname === 'blog.testdomain.co') {
    console.log(`Rewriting /blog${path}`)
    console.log(`URL: ${new URL(`/docs${path}`, request.url)}`)
    return rewrite(new URL(`/blog${path}`, request.url))
  }
}
