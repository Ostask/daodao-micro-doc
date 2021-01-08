const TokenKey = process.env.VUE_APP_NODE_ENV+'Admin-Token'
const UserKey = process.env.VUE_APP_NODE_ENV+'userInfo'
const ThemeKey = process.env.VUE_APP_NODE_ENV+'theme'

export function getToken() {
  return window.localStorage.getItem(TokenKey)
}

export function setToken(token) {
  window.localStorage.setItem(TokenKey, token)
}

export function removeUser() {
  window.localStorage.removeItem(UserKey)
}

export function getUser() {
  return JSON.parse(window.localStorage.getItem(UserKey))
}

export function setUser(token) {
  window.localStorage.setItem(UserKey, token)
}

export function removeToken() {
  window.localStorage.removeItem(TokenKey)
}

export function getPassword(){
  return JSON.parse(window.localStorage.getItem('loginInfo'))
}

export function setPassword(username,password){
    window.localStorage.setItem('loginInfo', JSON.stringify({username,password}))
}

export function removePassword() {
    window.localStorage.removeItem('loginInfo')
}

export function getTheme(){
  return window.localStorage.getItem(ThemeKey)
}

export function setTheme(theme){
    window.localStorage.setItem(ThemeKey, theme)
}

