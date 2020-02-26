import {shortenText } from '../utils/functions'
import { wordCount, attachUserName} from '../../server/utils'
import {shortText, longText, posts, users} from './__data__/testData'

test(`make sure characters are under 100`, () => {
    expect(shortenText(shortText)).toHaveLength(29)
})

test(`cut off extra characters after 100, and add three periods`, () => {
    const shortened = shortenText(longText)
    expect(shortened).not.toHaveLength(longText.length)
    expect(shortened.slice(-3)).toBe(`...`)
})

test(`check the posts on the array and return a word count`, () => {
    expect(wordCount(posts)).toBe(233)
})

test(`AttachUserName will display name`, () => {
    const newPost = attachUserName(users, posts)
    expect(newPost[0]).toHaveProperty(`displayName`)
})

test(`AttachUser will remove any post that doesn't match`, () =>  {
    const newPosts = attachUserName(users, posts)
    const deletedPosts = posts[5]
    expect(newPosts).not.toContainEqual(deletedPosts)
})