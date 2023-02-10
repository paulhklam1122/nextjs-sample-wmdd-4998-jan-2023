import { v4 as uuidv4 } from 'uuid'

import { apiResponse } from 'utils/apiResponse'
import { validateFieldPresence } from 'utils/validations'

const { POSTS } = require('data')

const handler = (req, res) => {
  let posts = POSTS

  if (req.method === 'GET') {
    apiResponse(res, 200, { posts })
  }

  if (req.method === 'POST') {
    let id = uuidv4()
    const { title, body } = req.body
    validateFieldPresence(res, 'title', title)
    validateFieldPresence(res, 'body', body)
    const newPost = {
      id,
      title,
      body
    }
    posts.push(newPost) && apiResponse(res, 200, { posts })
  }
}

export default handler
