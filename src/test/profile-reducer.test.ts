import profileReducer, {addPostActionCreator, deletePostAC} from "../Redux/ProfileReducer";

const state = {
    posts: [
        {id: 1, message: 'Hi, how are u?', likesCount: 15},
        {id: 2, message: "It's my first post", likesCount: 20},
        {id: 3, message: "huy", likesCount: 20},
    ],
    profile: null,
    status: '',
    userId: null,
    newPostText: ""
}

it('new post should be added', () => {
    const action = addPostActionCreator("test1")

    const newState = profileReducer(state, <any>action)

    expect(newState.posts.length).toBe(4)

})
it('new post should be added with message "test"', () => {
    const action = addPostActionCreator("test1")

    const newState = profileReducer(state, <any>action)


    expect(newState.posts[3].message).toBe("test1")
})

it('after deleting length should be decrement', () => {
    const action = deletePostAC(1)

    const newState = profileReducer(state, <any>action)


    expect(newState.posts.length).toBe(2)
})