import {blockContent} from './schemas/blockContent'
import {category} from './schemas/category'
import {post} from './schemas/post'
import {author} from './schemas/author'
import hero from './schemas/hero'
import work from "./schemas/work"
import reviews from './schemas/reviews'



export const schema = {
  types: [post, author, category, blockContent,hero,work,reviews],
}
