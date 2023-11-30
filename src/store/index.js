import create from 'zustand'
import uniqid from 'uniqid';

let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let formattedDate = day + "/" + month + "/" + year;

const useStore = create((set, get) => ({
 posts: [],
 loading: false,
 error: null,
 newPost: {
  id: "",
  title: "",
  author: "",
  description: "",
  image: "",
  color: "",
  theme: "dark",
  linkTitle: "",
  link: "",
  posted: false,
  date: formattedDate
 },

 onTitleChange(title) {
  const newPost = {...get().newPost, title}
  set({ newPost })
 },

 onAuthorChange(author) {
  const newPost = {...get().newPost, author}
  set({ newPost })
 },

 onColorChange(color) {
  const newPost = {...get().newPost, color}
  set({ newPost })
 },

 onLinkChange(link) {
  const newPost = {...get().newPost, link}
  set({ newPost })
 },

 onThemeChange(theme) {
  const newPost = {...get().newPost, theme}
  set({ newPost })
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

 async addPost(post) {
  try {
    const response = await fetch(`http://localhost:3001/posts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({...post, id: uniqid()})})
    if (!response.ok) {
      throw new Error(`Could not delete`)
    } 
    this.fetchPosts();
  } catch (e) {
    console.log(e);
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