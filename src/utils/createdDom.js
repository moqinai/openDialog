const dom = `
  <div class="zonst-switch-system" style="z-index: 2099;">
    <div role="dialog" aria-modal="true" aria-label="Tips" class="el-overlay-dialog">
      <div class="el-dialog" tabindex="-1" style="--el-dialog-width: 30%;">
        <header class="el-dialog__header">
          <span role="heading" class="el-dialog__title">Tips</span>
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
          <span data-v-1735ddb7="">This is a message</span>
        </div>
        <footer class="el-dialog__footer">
          <span class="dialog-footer" data-v-1735ddb7="">
            <button aria-disabled="false" type="button" class="el-button" data-v-1735ddb7="">
              <span class="">取消</span>
            </button>
            <button aria-disabled="false" type="button" class="el-button el-button--primary" data-v-1735ddb7="">
              <span class=""> 确定 </span>
            </button>
          </span>
        </footer>
      </div>
    </div>
  </div>
`
const domdialog = document.createElement('div').innerHTML = dom
document.body.appendChild(domdialog)


export default domdialog
