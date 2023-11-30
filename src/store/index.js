import create from 'zustand'

const useStore = create((set, get) => ({
 posts: [],
 loading: false,
 error: null,
 
 addPost(newPost) {
   const posts = [...get().posts, newPost]
   set({ posts })
 },
 
 async fetchPosts() {
   set({ loading: true })
   try {
     const response = await fetch("http://localhost:3001/posts")
     if (!response.ok) throw new Error(`Could not fetch ${url}, status ${response.status}`)
     set({ posts: await response.json() })
   } catch (e) {
     console.log(e);
   } finally {
     set({ loading: false })
   }
 },

 async deletePost(id) {
  try {
    const response = await fetch(`http://localhost:3001/posts/${id}`, {method: "DELETE"})
    if (!response.ok) {
      throw new Error(`Could not delete`)
    } 
    this.fetchPosts();
  } catch (e) {
    console.log(e);
  }
},

async publishPost(post) {
  set({ loading: true })
  try {

    post.posted = !post.posted;

    const response = await fetch(`http://localhost:3001/posts/${post.id}`, {
      method: "PUT", 
      headers: {
      'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(post)})
    if (!response.ok) {
      throw new Error(`Could not publish`)
    } 
    this.fetchPosts();
  } catch (e) {
    console.log(e);
  } finally {
    set({ loading: false })
  }
}

}))

export default useStore