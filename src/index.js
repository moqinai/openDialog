// import { $http } from './utils/http'
import './index.scss'
import operateDom from './utils/operateDialog'

export default class injectSwitchSystem extends operateDom {
  constructor() {
    super()
  }
  static url = 'https://zlink.zonst.com'

  // static closeDialog() {
  //   super.domdialog.style.display = 'none'
  // }

  // static systemChange = (v) => {
  //   console.log(v)
  // }

  static openDialog() {
    // console.log(super.domdialog)
    super.domdialog.style.display = 'block'
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
