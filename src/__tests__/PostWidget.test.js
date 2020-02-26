import React from 'react'
import {render} from '@testing-library/react'
import PostWidget from '../components/PostWidget'
import {MemoryRouter} from 'react-router-dom'
import {posts, longText} from './__data__/testData'
import {shortenText} from '../utils/functions'

const longPost = posts[0]
const post = posts[1]

test(`renders PostWidget and checks the innser contents`, () => {
    const { container } = render(
        <MemoryRouter>
            <PostWidget {...post}/>
        </MemoryRouter>
    )
    expect(container.textContent).toContain(post.text)
})

test(`Shortens display`, () => {
    const { container } = render(
        <MemoryRouter>
            <PostWidget {...longPost}/>
        </MemoryRouter>
    )
    expect(container.textContent).toContain(shortenText(longPost.text))
})

test(`Displays all text when true`, () => {
    const { container } = render(
        <MemoryRouter>
            <PostWidget expanded={true} {...longPost}/>
        </MemoryRouter>
    )
    expect(container.textContent).toContain(longPost.text)
})