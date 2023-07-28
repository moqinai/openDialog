// import { $http } from './utils/http'
// import './index.scss'
import './base.scss'
import './el-drawer.scss'
import operateDom from './utils/operateDialog'

export default class injectSwitchSystem extends operateDom {
  constructor() {
    super()
  }
  static url = 'https://zlink.zonst.com'

  static openDialog() {
    super.domdialog.style.display = 'block'
    const a = setTimeout(() => {
      super.domdialog.querySelector('.el-drawer').classList.add('open')
      clearTimeout(a)
    }, 50)
    super.domdialog.querySelector('.el-overlay').addEventListener('click', super.closeDialog, false); // 监听点击空白处
    super.keyDownListener() // 监听esc按下
  }

  static async init(dom) {
    console.log(dom)
    try {
      const baseUrl = dom.env ? 'http://zlink.test.xq5.com' : 'https://zlink.zonst.com'
      this.url = baseUrl
      await super.request(this.url) // 请求数据
      super.createdDom() // 创建Dom
      dom.container.addEventListener('click', this.openDialog, false);
    } catch (err) {
      console.log(err)
    }
  }
};
