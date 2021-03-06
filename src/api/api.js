import apiMusic from './api.url'
import HttpRequest from './axios'
const baseUrl = 'https://music.m3lt.cn/'
let axios = new HttpRequest(baseUrl)
export const getBanner = () => {
  return axios.request({
    url: apiMusic.banner,
    method: 'get'
  })
}
export const getpersonalized = () => {
  return axios.request({
    url: apiMusic.personalized,
    method: 'get'
  })
}
export const getSongListByOrder = data => {
  return axios.request({
    url: apiMusic.topPlaylist,
    method: 'get',
    params: data
  })
}
export const getAllTag = (params = {}) => {
  return axios.request({
    url: apiMusic.allTag,
    method: 'get',
    params: params
  })
}
export const getSongUrl = id => {
  return axios.request({
    url: apiMusic.musicUrl,
    method: 'get',
    params: {
      id: id
    }
  })
}
export const getLyric = id => {
  return axios.request({
    url: apiMusic.lyric,
    method: 'get',
    params: {
      id: id
    }
  })
}
export const gethotSearch = () => {
  return axios.request({
    url: apiMusic.hotSearch,
    method: 'get'
  })
}
export const searchMusic = data => {
  return axios.request({
    url: apiMusic.search,
    method: 'get',
    params: {
      keywords: data
    }
  })
}
export const getsongDetail = id => {
  return axios.request({
    url: apiMusic.songDetail,
    method: 'get',
    params: {
      ids: id
    }
  })
}
export const getsongAlbum = id => {
  return axios.request({
    url: apiMusic.album,
    method: 'get',
    params: {
      id: id
    }
  })
}
export const loginCellphone = (
  params = {
    phone: '',
    password: ''
  }
) => {
  return axios.request({
    url: apiMusic.loginCellphone,
    method: 'get',
    params: params
  })
}
export const loginEmail = (
  params = {
    email: '',
    password: ''
  }
) => {
  return axios.request({
    url: apiMusic.loginEmail,
    method: 'get',
    params: params
  })
}
export const logout = (params = {}) => {
  return axios.request({
    url: apiMusic.logout,
    method: 'get',
    params: params
  })
}
export const userPlaylist = (
  params = {
    uid: ''
  }
) => {
  return axios.request({
    url: apiMusic.userPlaylist,
    method: 'get',
    params: params
  })
}
export const userRecord = (
  params = {
    uid: '',
    type: 1
  }
) => {
  return axios.request({
    url: apiMusic.userRecord,
    method: 'get',
    params: params
  })
}
export const playlistDetail = (
  params = {
    id: ''
  }
) => {
  return axios.request({
    url: apiMusic.playlistDetail,
    method: 'get',
    params: params
  })
}
export const recommendSongs = (params = {}) => {
  return axios.request({
    url: apiMusic.recommendSongs,
    method: 'get',
    params: params
  })
}
export const toplist = (params = {}) => {
  return axios.request({
    url: apiMusic.toplist,
    method: 'get',
    params: params
  })
}
