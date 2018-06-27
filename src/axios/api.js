import { fetch } from "./index";
const USER = '/user/';
const MESSAGE = '/message/'


/**
 * 用户登录
 */
export function login(params) {
  return fetch(USER + "login", params);
}