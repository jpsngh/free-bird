import {blockContent} from './schemas/blockContent'
import {category} from './schemas/category'
import {post} from './schemas/post'
import {author} from './schemas/author'
import hero from './schemas/hero'
import work from "./schemas/work"
import reviews from './schemas/reviews'
import careers from './schemas/careers'
import transformation from './schemas/transformation'
import trust from './schemas/trust'
import location from './schemas/locations'
import leaderShip from './schemas/leaderShip'
import  banner from './schemas/banner'
import  cta from './schemas/cta'
import parallax from './schemas/parallax'



export const schema = {
  types: [post, author, category ,blockContent,hero,
    work,reviews,careers,transformation,
    trust,location,leaderShip,
    cta,banner,parallax],
}
