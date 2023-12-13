import create from 'zustand'
import uniqid from 'uniqid';

let date = new Date();
let day = (date.getDate()).toString().padStart(2, 0);
let month = (date.getMonth() + 1).toString().padStart(2, 0);
let year = date.getFullYear();

let formattedDate = day + "/" + month + "/" + year;

const newPostDefault = {
  id: "",
  title: "Название",
  author: "altenar",
  description: "Описание",
  image: "https://kartinki.pibig.info/uploads/posts/2023-04/1682010561_kartinki-pibig-info-p-luk-iz-chipollino-kartinka-arti-vkontakte-51.jpg",
  color: "",
  theme: "dark",
  linkTitle: "Ссылка",
  link: "",
  posted: false,
  date: formattedDate,
  discriptor: "",
}

const useStore = create((set, get) => ({
  posts: [],
  loading: false,
  error: null,
  inputError: false,
  file: "",
  url: "",
  newPost: newPostDefault,

  clearNewPostData() {
    set({ newPost: newPostDefault })
  },

  setFile(file) {
    set({file})
  },

  setUrl(url) {
    set({url})
  },

  onDataChange(data) {
    const newPost = {...get().newPost, ...data}
    set({ newPost })
    console.log(newPost);
    if (newPost.link.length > 50 || newPost.linkTitle.length > 30 || newPost.title.length > 50 || newPost.discriptor.length > 30) {
      set({inputError: true})
    } else {
      set({inputError: false})
    }
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
        body: JSON.stringify({...post, id: uniqid(), image: "https://kartinki.pibig.info/uploads/posts/2023-04/1682010561_kartinki-pibig-info-p-luk-iz-chipollino-kartinka-arti-vkontakte-51.jpg"})})
      if (!response.ok) {
        throw new Error(`Could not add`)
      } 
      this.fetchPosts();
        
    } catch (e) {
      console.log(e);
    } finally {
      this.clearNewPostData(); 
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
  },

  fileUpload(file, onProgress, setLoading)  {
    
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.responseType = 'json';

      xhr.open('POST', "http://localhost:3001/image");
  
      xhr.upload.onprogress = (event) => {
        onProgress(Math.round((event.loaded / event.total) * 100));
        if (event.loaded === event.total) {
          setTimeout(() => {
            setLoading(false)
          }, 500);
        }
      };
      
      xhr.onload = () => {
        if (xhr.status === 200) resolve(xhr.response);
        else reject(xhr.response);
      };
  
      const myData = new FormData();
      myData.append('my_file', file);
      
      xhr.send(myData);
    })
  }

}))

export default useStore