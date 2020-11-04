// utils/API.js

const baseURL = 'http://localhost:3001/postmessages';

export const getPostMessages = () => fetch(`${baseURL}/`).then(res => res.json())

export const createPostMessages = (data) => fetch(`${baseURL}/`, {
  method: "POST",
  headers: {
    "Accept" : "application/JSON",
    "Content-type" : "application/JSON"
  },
  body: JSON.stringify(data)
})

export const getSinglePost = (id) => fetch(`${baseURL}/${id}`).then(res => res.json())

export const editPostMessage = (data,id) => fetch(`${baseURL}/${id}`, {
  method: "PUT",
  headers: {
    "Accept" : "application/JSON",
    "Content-type" : "application/JSON"
  },
  body: JSON.stringify(data)
})

export const deletePostMessage =  (id) => fetch(`${baseURL}/${id}`, {
  method: "DELETE",
  headers: {
    "Accept" : "application/JSON",
    "Content-type" : "application/JSON"
  }
})