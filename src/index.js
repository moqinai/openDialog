/*
 * @Author: lipengcheng lipengcheng@zonst.cn
 * @Date: 2023-07-24 20:32:49
 * @LastEditors: lipengcheng lipengcheng@zonst.cn
 * @LastEditTime: 2023-07-25 01:28:33
 * @FilePath: /switch-system/src/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import { $http } from './utils/http'
import './index.scss'
import dialogDom from './utils/createdDom'

function addEvent(obj,type,handle) {
  try { 
    // Chrome、FireFox、Opera、Safari、IE9.0及其以上版本
    obj.addEventListener(type, handle, false);
  } catch(e) {
    try { // IE8.0及其以下版本
      obj.attachEvent('on' + type, handle);
    } catch (e) { // 早期浏览器
      obj['on' + type] = handle;
    }
  }
}

export default class injectSwitchSystem {
  constructor() {
  }
  static url = 'https://xxxx.com' // 请求系统接口

  static openDialog() {
    // console.log(2)
    document.body.append(dialogDom)
  }

  static init(dom) {
    console.log(dom)
    try {
      dom.container.addEventListener('click', this.openDialog, false);
    } catch (err) {
      console.log(err)
    }
  }
};



/* 


gitlab.staff.pxjy.com,192.168.1.22 ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAsHgJyMwB+KoIyboBt0K7gtj8tCPwoDj6NtTgC2W0kZkcpJQoB2vzKMpc+Xe7V/o42+DgyVRN/mIEtPuMN+i18XlJo6HIXp6sEnXRvidqNaPFYnlzoJGbZpWOquFlFnequMgv/hxdOJ+WAX2s/Q04CrvZ1wEd9XcNwXMD13OeeUfbxXnWFTzupPYMUDMYmxRslkk5hCsXXJU+nuQcpN4618FjSCJ7oe+g52lddE/+o4cHGQgb12TnWd3vhVVjlnbRRoevDQm93OUrm6JEbzMPXmDXnE9xqkqesr1aYV1HVdwfLuQLSGc0Q0HtBxEn7I0srL3IdNhaNJk6dPPRIMeYlQ==
gitlab.com,35.231.145.151 ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBFSMqzJeV9rUzU4kWitGjeR4PWSa29SPqJ1fVkhtj3Hw9xjLVXVYrU9QlYWrOLXBpQ6KWjbjTDTdDkoohFzgbEY=
[gitlab.pxjy.com]:10023,[182.92.68.39]:10023 ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEA60z/8TGSknNb2Zjc4wp0lJnMPqAoVPtQfaRF5MiB3lzjJ9vDJyZ1IYXtr4tydQNF8wxEL42QRjLFdpKOdZ1ugfddMirgynU1I05dEJCvEkuBFurg0ig6v/4+jPHgH7oaO5KvWiVnS28yAI6HIXDun+QtTw1FIVJ1dUD3XgSG0BxkghFIujczFF94uz9v+D4arXtL38i/uxn6jJpZWZxacgfeSPKFoYGl7xNC3j6i4DfNUGeL6Wa0TNGcY2zJ5zSuYYXtoTQ37hcerbpBMgvuJKnZRL5GA7fcMk03NdGB2ebs7k5k6e1QJtneVT6sfSCwyA5ZTifJhF01HXQBkqGKKw==
github.com,13.229.188.59 ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAq2A7hRGmdnm9tUDbO9IDSwBK6TbQa+PXYPCPy6rbTrTtw7PHkccKrpp0yVhp5HdEIcKr6pLlVDBfOLX9QUsyCOV0wzfjIJNlGEYsdlLJizHhbn2mUjvSAHQqZETYP81eFzLQNnPHt4EVVUh7VfDESU84KezmD5QlWpXLmvU31/yMf+Se8xhHTvKSCZIFImWwoG6mbUoWf9nzpIoaSjB+weqqUUmpaaasXVal72J+UX2B+2RPW3RcT0eOzQgqlJL3RKrTJvdsjE3JEAvGq3lGHSZXy28G3skua2SmVi/w4yCE6gbODqnTWlg7+wC604ydGXA8VJiS5ap43JXiUFFAaQ==
13.250.177.223 ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAq2A7hRGmdnm9tUDbO9IDSwBK6TbQa+PXYPCPy6rbTrTtw7PHkccKrpp0yVhp5HdEIcKr6pLlVDBfOLX9QUsyCOV0wzfjIJNlGEYsdlLJizHhbn2mUjvSAHQqZETYP81eFzLQNnPHt4EVVUh7VfDESU84KezmD5QlWpXLmvU31/yMf+Se8xhHTvKSCZIFImWwoG6mbUoWf9nzpIoaSjB+weqqUUmpaaasXVal72J+UX2B+2RPW3RcT0eOzQgqlJL3RKrTJvdsjE3JEAvGq3lGHSZXy28G3skua2SmVi/w4yCE6gbODqnTWlg7+wC604ydGXA8VJiS5ap43JXiUFFAaQ==
52.74.223.119 ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAq2A7hRGmdnm9tUDbO9IDSwBK6TbQa+PXYPCPy6rbTrTtw7PHkccKrpp0yVhp5HdEIcKr6pLlVDBfOLX9QUsyCOV0wzfjIJNlGEYsdlLJizHhbn2mUjvSAHQqZETYP81eFzLQNnPHt4EVVUh7VfDESU84KezmD5QlWpXLmvU31/yMf+Se8xhHTvKSCZIFImWwoG6mbUoWf9nzpIoaSjB+weqqUUmpaaasXVal72J+UX2B+2RPW3RcT0eOzQgqlJL3RKrTJvdsjE3JEAvGq3lGHSZXy28G3skua2SmVi/w4yCE6gbODqnTWlg7+wC604ydGXA8VJiS5ap43JXiUFFAaQ==
192.30.255.113 ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAq2A7hRGmdnm9tUDbO9IDSwBK6TbQa+PXYPCPy6rbTrTtw7PHkccKrpp0yVhp5HdEIcKr6pLlVDBfOLX9QUsyCOV0wzfjIJNlGEYsdlLJizHhbn2mUjvSAHQqZETYP81eFzLQNnPHt4EVVUh7VfDESU84KezmD5QlWpXLmvU31/yMf+Se8xhHTvKSCZIFImWwoG6mbUoWf9nzpIoaSjB+weqqUUmpaaasXVal72J+UX2B+2RPW3RcT0eOzQgqlJL3RKrTJvdsjE3JEAvGq3lGHSZXy28G3skua2SmVi/w4yCE6gbODqnTWlg7+wC604ydGXA8VJiS5ap43JXiUFFAaQ==
192.30.255.112 ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAq2A7hRGmdnm9tUDbO9IDSwBK6TbQa+PXYPCPy6rbTrTtw7PHkccKrpp0yVhp5HdEIcKr6pLlVDBfOLX9QUsyCOV0wzfjIJNlGEYsdlLJizHhbn2mUjvSAHQqZETYP81eFzLQNnPHt4EVVUh7VfDESU84KezmD5QlWpXLmvU31/yMf+Se8xhHTvKSCZIFImWwoG6mbUoWf9nzpIoaSjB+weqqUUmpaaasXVal72J+UX2B+2RPW3RcT0eOzQgqlJL3RKrTJvdsjE3JEAvGq3lGHSZXy28G3skua2SmVi/w4yCE6gbODqnTWlg7+wC604ydGXA8VJiS5ap43JXiUFFAaQ==
20.205.243.166 ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAq2A7hRGmdnm9tUDbO9IDSwBK6TbQa+PXYPCPy6rbTrTtw7PHkccKrpp0yVhp5HdEIcKr6pLlVDBfOLX9QUsyCOV0wzfjIJNlGEYsdlLJizHhbn2mUjvSAHQqZETYP81eFzLQNnPHt4EVVUh7VfDESU84KezmD5QlWpXLmvU31/yMf+Se8xhHTvKSCZIFImWwoG6mbUoWf9nzpIoaSjB+weqqUUmpaaasXVal72J+UX2B+2RPW3RcT0eOzQgqlJL3RKrTJvdsjE3JEAvGq3lGHSZXy28G3skua2SmVi/w4yCE6gbODqnTWlg7+wC604ydGXA8VJiS5ap43JXiUFFAaQ==
git.xq5.com ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAILPqgmRpHJwGMeNgbHh6uwQSQellQJnm68460KRF/EUA
git.xq5.com ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCoOD38FmdDR/17ByzIxOmhDSGJu8eXxfAnTtJ9UQDmyuRNX1l0G+osTTm0LBkwxcnaXCgi7XztIUVXVtVimABKBndRDESgaRS+/7cwLnQER0qSVtQWCmkq/5G6Dj+nJu1Ozy6LA5NM6LYqHtct7Qy2+Gw3IgO//wcQA20AgEUav++PIo4io3pU23ypARfRTprdsVKOKBOnICN8zCno+C1q4QyfQQGhb02qy0MGQ03oMnNOq71wnw8WukicmMnFB3S4f2SFeqJq3KreOdl78uhf7BKMhg4wg8BmXv6g0fxXm/Ssc6Gov8n4my/QEvRY1shBk8o/Ey2NnX/6HiMzvJDf
git.xq5.com ecdsa-sha2-nistp256 Offending RSA key in /Users/lipengcheng/.ssh/known_hosts:4
Host key for github.com has changed and you have requested strict checking.
Host key verification failed.
fatal: Could not read from remote repository.AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBKPyO8Iks9wCN40Yhm9Q2GzmW7+RJSqqGpEh6X/c1b+v72Wo+ujkRqpWp4oWa2gGIh/qmpYOdPnH85BpMmnQBAQ=
*/