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

/* const createdDom = () => {
  const dom = `
    <div role="dialog" aria-modal="true" aria-label="系统切换" class="el-overlay-dialog">
      <div class="el-dialog" tabindex="-1">
        <header class="el-dialog__header">
          <span role="heading" class="el-dialog__title">系统切换</span>
          <button aria-label="Close this dialog" class="el-dialog__headerbtn" type="button">
            <i class="el-icon el-dialog__close">
              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z">
                </path>
              </svg>
            </i>
          </button>
        </header>
        <div class="el-dialog__body">

          <form class="el-form">
            <div class="el-form-item">
              <label id="el-id-9829-351" for="el-id-9829-405" class="el-form-item__label" style="">系统选择：</label>
              <div class="el-form-item__content">
                <div class="el-input">
                  <div class="el-input__wrapper" role="button" tabindex="-1">
                    <select class="el-input__inner" autocomplete="off" tabindex="0" id="el-id-9829-405">
                      <option :value="item.value" class="option_list">
                        {{ item.label }}
                      </option>
                      <option :value="item.value" class="option_list">
                        {{ item.label }}
                      </option>
                      <option :value="item.value" class="option_list">
                        {{ item.label }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="el-form-item">
              <label id="el-id-9829-352" for="el-id-9829-406" class="el-form-item__label" style="">环境选择：</label>
              <div class="el-form-item__content">
                <div class="el-input">
                  <div class="el-input__wrapper" role="button" tabindex="-1">
                    <select class="el-input__inner" autocomplete="off" tabindex="0" id="el-id-9829-406">
                      <option :value="item.value" class="option_list">
                        {{ item.label }}
                      </option>
                      <option :value="item.value" class="option_list">
                        {{ item.label }}
                      </option>
                      <option :value="item.value" class="option_list">
                        {{ item.label }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </form>

        </div>
        <footer class="el-dialog__footer">
          <span class="dialog-footer">
            <button aria-disabled="false" type="button" class="el-button">
              <span class="">取消</span>
            </button>
            <button aria-disabled="false" type="button" class="el-button el-button--primary">
              <span class=""> 确定 </span>
            </button>
          </span>
        </footer>
      </div>
    </div>
  `
  const domdialog = document.createElement('div')
  domdialog.className = 'zonst-switch-system'
  domdialog.style.zIndex = '2099'
  domdialog.innerHTML = dom
} */

export default class injectSwitchSystem {
  constructor() {
  }
  static url = 'https://xxxx.com' // 请求系统接口

  static openDialog() {
    document.body.appendChild(dialogDom)
  }

  static init(dom) {
    console.log(dom)
    try {
      this.url = dom.env ? 'http://zlink.test.xq5.com/api/v1/platforms/all' : 'https://zlink.zonst.com/api/v1/platforms/all'
      console.log(this.url)
      dom.container.addEventListener('click', this.openDialog, false);
    } catch (err) {
      console.log(err)
    }
  }
};
