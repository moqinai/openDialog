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
    document.body.appendChild(dialogDom)
  }

  static init(dom) {
    console.log(dom)
    try {
      this.url = dom.env ? 'http://zlink.test.xq5.com/api/v1/platforms/all' : ''
      dom.container.addEventListener('click', this.openDialog, false);
    } catch (err) {
      console.log(err)
    }
  }
};
