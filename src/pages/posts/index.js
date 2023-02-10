import { POSTS } from 'data'
import Link from 'next/link'

export const getStaticProps = async () => {
  return {
    props: {
      posts: POSTS
    }
  }
}

const PostIndex = props => {
  const { posts } = props

  return (
    <div>
      <h1>Posts Index</h1>
      <ul>
        {posts.map(post => (
          <div key={post.id}>
            <Link
              href={{
                pathname: '/posts/[id]',
                query: { id: post.id, title: post.title, body: post.body }
              }}
            >
              <h3>{post.title}</h3>
            </Link>
            <h3>{post.body}</h3>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default PostIndex
