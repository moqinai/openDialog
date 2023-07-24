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
        <div id="el-id-9829-89" class="el-dialog__body">
          <span>This is a message</span>
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
document.body.appendChild(domdialog)


export default domdialog
