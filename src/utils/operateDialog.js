/*
 * @Author: lipengcheng
 * @Date: 2023-07-24 17:15:28
 * @LastEditTime: 2023-08-01 17:15:43
 * @Description: 生成dialog dom及操作
 */
import { $http } from './http'

class operateDom {
  constructor() {}
  static systemData = []
  
  static containerList = ''

  static systemHTML = '<option value="" class="option_list"> 请选择系统 </option>'
  static envData = []
  static envHTML = '<option value="" class="option_list"> 请选择环境 </option>'

  static domdialog = document.createElement('div')

  static drawerDom = `
    <div class="el-overlay" style="z-index: 2039;">
      <div aria-modal="true" aria-label="系统切换" aria-describedby="el-id-2609-193" class="el-drawer rtl" role="dialog" style="width: 80%;">
        <span class="el-drawer__sr-focus" tabindex="-1"></span>
        <header class="el-drawer__header">
          <span id="el-id-2609-194" role="heading" class="el-drawer__title">系统切换</span>
          <button aria-label="Close this dialog" class="el-drawer__close-btn" type="button" onClick="injectSwitchSystem.closeDialog()">
            <i class="el-icon el-drawer__close">
              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path>
              </svg>
            </i>
          </button>
        </header>
        <div id="el-id-2609-193" class="el-drawer__body">
        </div>
      </div>
    </div>`
  
/*   static dom = `
    <div role="dialog" aria-modal="true" aria-label="系统切换" class="el-overlay-dialog">
      <div class="el-dialog" tabindex="-1">
        <header class="el-dialog__header">
          <span role="heading" class="el-dialog__title">系统切换</span>
          <button aria-label="Close this dialog" class="el-dialog__headerbtn" type="button" onClick="${ operateDom.closeDialog }">
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
                    <select class="el-input__inner select_system_container" autocomplete="off" tabindex="0" id="el-id-9829-405" onChange="injectSwitchSystem.systemChange(this.options[this.options.selectedIndex].value)">
                      `+ this.systemHTML + `
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="el-form-item env-form-item">
              <label id="el-id-9829-352" for="el-id-9829-406" class="el-form-item__label" style="">环境选择：</label>
              <div class="el-form-item__content">
                <div class="el-input">
                  <div class="el-input__wrapper" role="button" tabindex="-1">
                    <select class="el-input__inner select_env_container" autocomplete="off" tabindex="0" id="el-id-9829-406" onChange="injectSwitchSystem.systemChange(this.options[this.options.selectedIndex].value)">
                      `+ this.envHTML + `
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </form>

        </div>
        <footer class="el-dialog__footer">
          <span class="dialog-footer">
            <button aria-disabled="false" type="button" class="el-button" onClick="injectSwitchSystem.closeDialog()">
              <span class="">取消</span>
            </button>
            <button aria-disabled="false" type="button" class="el-button el-button--primary">
              <span class=""> 确定 </span>
            </button>
          </span>
        </footer>
      </div>
    </div>
  ` */


  static mOver(e) {
    console.log(e)

    // console.log(e.target.querySelector('.lpc-popper'))
    console.log('移入')
    e.target.querySelector('.lpc-popper').style.display = 'block'
  }

  static mOut(e) {
    console.log(e)
    console.log('移出')
    // console.log(e.target)
    e.target.querySelector('.lpc-popper').style.display = 'none'
  }

  static async request(base) {
    await $http('GET', base + '/api/server/v1/permission/account?platformKey=zlink').then(res => {
      // this.systemData = res.data?.list || []
      const data = {
        operation: {
          name: '运营系统',
          list: [
            { id: 1, name: '运营系统1', url: 'www.baidu.com', isEnv: true,
              children: [
                { id: 11, name: '运营系统1-1', url: 'www.baidu.com' },
                { id: 12, name: '运营系统1-2', url: 'www.baidu.com' },
                { id: 13, name: '运营系统1-3', url: 'www.baidu.com' },
              ]
            },
            { id: 2, name: '运营系统2', url: 'www.baidu.com', isEnv: false },
            { id: 3, name: '运营系统3', url: 'www.baidu.com', isEnv: false },
            { id: 4, name: '运营系统4', url: 'www.baidu.com', isEnv: false },
            { id: 5, name: '运营系统5', url: 'www.baidu.com', isEnv: true,
              children: [
                { id: 51, name: '运营系统5-1', url: 'www.baidu.com' },
                { id: 52, name: '运营系统5-2', url: 'www.baidu.com' },
                { id: 53, name: '运营系统5-3', url: 'www.baidu.com' },
              ]
            },
            { id: 6, name: '运营系统6', url: 'www.baidu.com', isEnv: false },
            { id: 7, name: '运营系统7', url: 'www.baidu.com', isEnv: false },
            { id: 8, name: '运营系统8', url: 'www.baidu.com', isEnv: false },
            { id: 9, name: '运营系统9', url: 'www.baidu.com', isEnv: false },
            { id: 10, name: '运营系统10', url: 'www.baidu.com', isEnv: false },
          ]
        },
        science: {
          name: '技术平台',
          list: [
            { id: 1, name: '技术平台1', url: 'www.baidu.com', isEnv: true,
              children: [
                { id: 11, name: '技术平台1-1', url: 'www.baidu.com' },
                { id: 12, name: '技术平台1-2', url: 'www.baidu.com' },
                { id: 13, name: '技术平台1-3', url: 'www.baidu.com' },
              ]
            },
            { id: 2, name: '技术平台2', url: 'www.baidu.com', isEnv: false },
            { id: 3, name: '技术平台3', url: 'www.baidu.com', isEnv: false },
            { id: 4, name: '技术平台4', url: 'www.baidu.com', isEnv: false },
            { id: 5, name: '技术平台5', url: 'www.baidu.com', isEnv: true,
              children: [
                { id: 51, name: '技术平台5-1', url: 'www.baidu.com' },
                { id: 52, name: '技术平台5-2', url: 'www.baidu.com' },
                { id: 53, name: '技术平台5-3', url: 'www.baidu.com' },
              ]
            }
          ]
        }
      }

      let list = ''
      for (let o in data) {
        list += `<div class="lpc-classify-container">
          <div class="lpc-classify-title">${ data[o].name }</div><div class="divider"></div><div class="plat-content">`;

          data[o].list.forEach((l) => {
            list +=  `<div class="platform-list" attr-listid="${ l.id }" attr-isChild="${ !!(l.children && l.children.length) }">${ l.name }`;
              if (l.children && l.children.length) {
                list += `<div class="lpc-popper">
                          <div>popover内容</div>
                          <span class="lpc-popper__arrow" data-popper-arrow="" style="position: absolute;"></span>
                        </div>`
              }
            list += `</div>`;
          })
          // onmouseover="injectSwitchSystem.mOver(this)" onmouseout="injectSwitchSystem.mOut(this)"
          list += `</div></div>`;
      }
      this.containerList = list
      
      /* this.systemData = [
        { id: 1, name: '运营系统1', url: 'www.baidu.com', isEnv: true,
          children: [
            { id: 11, name: '运营系统1-1', url: 'www.baidu.com' },
            { id: 12, name: '运营系统1-2', url: 'www.baidu.com' },
            { id: 13, name: '运营系统1-3', url: 'www.baidu.com' },
          ]
        },
        { id: 2, name: '运营系统2', url: 'www.baidu.com', isEnv: false },
        { id: 3, name: '运营系统3', url: 'www.baidu.com', isEnv: false },
        { id: 4, name: '运营系统4', url: 'www.baidu.com', isEnv: false },
        { id: 5, name: '运营系统5', url: 'www.baidu.com', isEnv: true,
          children: [
            { id: 51, name: '运营系统5-1', url: 'www.baidu.com' },
            { id: 52, name: '运营系统5-2', url: 'www.baidu.com' },
            { id: 53, name: '运营系统5-3', url: 'www.baidu.com' },
          ]
        }
      ]
      for (let i = 0; i < this.systemData.length; i++) {
        this.systemHTML += `<option value="${ this.systemData[i].id }" class="option_list"> ${ this.systemData[i].name } </option>`
      }
      if (this.systemData[0].isEnv) { // 如果第一个有环境变量
        this.envData = this.systemData[0].children
        this.envData.forEach((opt) => {
          this.envHTML += `<option value="${ opt.id }" class="option_list"> ${ opt.name } </option>`
        })
      } */
    })
  }

  static createdDom() {
    this.domdialog.className = 'zonst-switch-system'
    this.domdialog.style.zIndex = '2099'
    this.domdialog.innerHTML = this.drawerDom // this.dom
    this.domdialog.style.display = 'none'
    document.body.appendChild(this.domdialog)
    document.querySelector('.el-drawer__body').innerHTML = this.containerList
    // console.log(document.querySelector('.platform-list'))
    const listenerItem = document.querySelectorAll('.platform-list')
    listenerItem.forEach(list => {
      // console.log(list)
      // console.log(list.getAttribute('attr-isChild'))
      if (list.getAttribute('attr-isChild') === 'true') {
        list.addEventListener('mouseover', this.mOver(), true);
        list.addEventListener('mouseout', this.mOut(), true);
      }
      
    })
    console.log(window.innerWidth) // innerWidth
    // document.querySelector('.platform-list').addEventListener('mouseover', this.hoverList, false); // onmouseout
  }

  static close() { 
    document.querySelector('.zonst-switch-system .el-drawer').classList.remove('open')
    const a = setTimeout(() => {
      document.querySelector('.zonst-switch-system').style.display = 'none'
      clearTimeout(a)
    }, 500)
  }

  static closeDialog(e) {
    if (e) {
      if ((typeof e.target.className) !== 'object' && e.target.className.indexOf('el-overlay') !== -1) {
        console.log(this)
        operateDom.close();
      }
      return
    }
    this.close();
  }

  static keyDownListener() {
    document.onkeydown = function (event) {
      const e = event || window.event || arguments.callee.caller.arguments[0];
      if (e && e.keyCode == 27) { // 按 Esc
        if (document.querySelector('.zonst-switch-system').style.display !== 'block') return
        operateDom.close()
      }
    }
  }

  static systemChange(v) {
    console.log(v)
    if (!v) return
    this.systemData.forEach(list => {
      if (list.id === +v) {
        if (!list.isEnv) {
          document.querySelector('.env-form-item').style.display = 'none'
        } else {
          this.envData = list.children
          this.envHTML = '<option value="" class="option_list"> 请选择环境 </option>'
          this.envData.forEach((opt) => {
            this.envHTML += `<option value="${ opt.id }" class="option_list"> ${ opt.name } </option>`
          })
          document.querySelector('.select_env_container').innerHTML = this.envHTML
          document.querySelector('.env-form-item').style.display = 'block'
        }
      }
    })
  }
}

export default operateDom
