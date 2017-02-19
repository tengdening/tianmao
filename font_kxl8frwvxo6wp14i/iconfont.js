;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-taoxin" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M511.234048 918.555648c-9.608192 0-18.776064-3.326976-26.06592-9.1136C59.817984 627.12832 61.674496 378.223616 63.476736 348.7488 64.295936 216.052736 173.30176 108.357632 307.141632 108.357632c84.932608 0 159.962112 43.395072 203.546624 109.16864 43.584512-65.773568 118.55872-109.16864 203.546624-109.16864 133.783552 0 242.845696 107.695104 243.6096 240.391168 1.854464 29.366272 3.710976 277.0176-418.2272 558.399488C532.196352 914.297856 522.068992 918.555648 511.234048 918.555648L511.234048 918.555648zM727.33696 646.234112C883.500032 476.694528 876.813312 355.407872 876.731392 353.824768c-0.218112-92.521472-73.032704-164.89984-162.496512-164.89984-89.464832 0-162.2528 72.378368-162.2528 161.297408 0 22.433792-18.914304 40.119296-41.293824 40.282112-23.197696-0.436224-41.321472-17.849344-41.321472-40.282112 0-88.918016-72.76032-161.297408-162.225152-161.297408l0 0c-89.463808 0-162.335744 72.378368-162.335744 161.297408 0 1.363968-0.054272 2.72896-0.16384 4.038656-0.16384 1.692672-11.979776 216.59136 365.991936 474.940416C605.120512 764.630016 675.262464 702.728192 727.33696 646.234112"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-xinxi" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M801.15712 693.794816c9.458688-9.46176 14.211072-21.900288 14.211072-34.338816L815.368192 193.02912c0-12.397568-4.752384-24.91904-14.211072-34.3808-9.50272-9.46176-21.982208-14.2336-34.420736-14.2336L112.288768 144.41472c-12.439552 0-24.879104 4.77184-34.379776 14.2336-9.503744 9.46176-14.25408 21.982208-14.25408 34.3808l0 466.42688c0 12.438528 4.75136 24.877056 14.25408 34.338816 9.500672 9.50272 21.940224 14.31552 34.379776 14.31552l139.29472 0 0 167.005184c-0.039936 7.871488 4.404224 15.45728 12.01152 19.007488 2.869248 1.353728 5.889024 1.992704 8.861696 1.992704 4.907008 0 9.686016-1.741824 13.444096-4.890624l189.437952-183.113728 291.396608 0C779.175936 708.11136 791.6544 703.29856 801.15712 693.794816zM459.60704 669.19936l-11.311104 10.934272L290.495488 832.6656 290.495488 708.11136l0-38.912-38.912 0-139.29472 0c-1.473536 0-4.325376-0.37888-6.862848-2.916352l-0.03072-0.031744-0.031744-0.03072c-2.312192-2.301952-2.797568-4.948992-2.797568-6.76352L102.565888 193.02912c0-1.501184 0.36352-4.38272 2.799616-6.807552 2.528256-2.518016 5.42208-2.893824 6.92224-2.893824l654.447616 0c1.509376 0 4.410368 0.372736 6.933504 2.864128 2.422784 2.446336 2.786304 5.331968 2.786304 6.838272l0 466.42688c0 1.497088-0.365568 4.374528-2.813952 6.823936-2.53952 2.53952-5.41696 2.919424-6.905856 2.919424L475.339776 669.200384 459.60704 669.200384z"  ></path>'+
      ''+
      '<path d="M938.514432 248.848384l-60.499968 0c-10.744832 0-19.456 8.710144-19.456 19.456 0 10.744832 8.711168 19.456 19.456 19.456l41.043968 0L919.058432 749.990912 721.405952 749.990912c-10.744832 0-19.456 8.711168-19.456 19.456l0 56.093696-94.047232-71.575552c-3.387392-2.578432-7.5264-3.974144-11.783168-3.974144l-93.964288 0c-10.744832 0-19.456 8.711168-19.456 19.456s8.711168 19.456 19.456 19.456l87.402496 0 120.065024 91.37664c3.452928 2.627584 7.605248 3.974144 11.78624 3.974144 2.941952 0 5.900288-0.666624 8.63744-2.023424 6.62528-3.283968 10.815488-10.039296 10.815488-17.432576L740.861952 788.902912l197.653504 0c10.744832 0 19.456-8.711168 19.456-19.456L957.971456 268.304384C957.970432 257.558528 949.259264 248.848384 938.514432 248.848384z"  ></path>'+
      ''+
      '<path d="M251.583488 363.656192c-34.583552 0-62.6432 27.976704-62.6432 62.642176 0 34.666496 28.059648 62.6432 62.6432 62.6432 34.604032 0 62.6432-27.977728 62.6432-62.6432C314.226688 391.632896 286.18752 363.656192 251.583488 363.656192z"  ></path>'+
      ''+
      '<path d="M439.512064 363.656192c-34.583552 0-62.6432 27.976704-62.6432 62.642176 0 34.666496 28.058624 62.6432 62.6432 62.6432 34.562048 0 62.6432-27.977728 62.6432-62.6432C502.155264 391.632896 474.074112 363.656192 439.512064 363.656192z"  ></path>'+
      ''+
      '<path d="M627.441664 363.656192c-34.583552 0-62.644224 27.976704-62.644224 62.642176 0 34.666496 28.059648 62.6432 62.644224 62.6432 34.564096 0 62.641152-27.977728 62.641152-62.6432C690.082816 391.632896 662.00576 363.656192 627.441664 363.656192z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-zhongbiao" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M511.700683 163.751504c-193.042621 0-349.534791 156.49217-349.534791 349.535815 0 193.042621 156.493194 349.536838 349.534791 349.536838s349.535815-156.494217 349.535815-349.536838C861.236498 320.243675 704.742281 163.751504 511.700683 163.751504zM511.700683 799.37815c-158.00257 0-286.089807-128.08826-286.089807-286.091854s128.087237-286.09083 286.089807-286.09083c158.00257 0 286.09083 128.087237 286.09083 286.09083S669.703253 799.37815 511.700683 799.37815z"  ></path>'+
      ''+
      '<path d="M645.075343 536.538883c-30.463826-12.243859-59.33027-20.912285-82.364893-25.322735-0.569982-14.160511-6.931876-26.824949-16.790408-35.687804 8.289804-15.446807 16.378016-34.727942 23.14207-56.115042 17.888416-56.56325 19.73446-106.419751 4.123924-111.358227-15.614629-4.937452-42.773176 36.913724-60.662615 93.477998-7.225565 22.846334-11.831466 44.597731-13.728676 62.73788-21.630646 5.813403-37.557384 25.550932-37.557384 49.01739 0 28.03552 22.726607 50.762127 50.762127 50.762127 12.494569 0 23.926946-4.52199 32.769334-12.007475 19.784602 12.983709 47.094598 27.018354 78.190827 39.517015 67.271126 27.039843 126.756939 36.643572 132.865053 21.450545C761.930771 597.815481 712.347492 563.578726 645.075343 536.538883z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-gouwuche" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M364.8 640l403.2 0c19.2 0 38.4-12.8 44.8-32l76.8-332.8c6.4-12.8 0-25.6-6.4-38.4-6.4-12.8-25.6-19.2-38.4-19.2L294.4 217.6 275.2 134.4 153.6 134.4C140.8 134.4 128 140.8 128 153.6s12.8 25.6 25.6 25.6l83.2 0 38.4 166.4c0 0 0 0 0 0 0 6.4 0 6.4 0 12.8l57.6 236.8C307.2 608 281.6 640 281.6 678.4c0 25.6 12.8 44.8 25.6 57.6-12.8 12.8-25.6 38.4-25.6 57.6 0 44.8 38.4 83.2 83.2 83.2S448 844.8 448 800c0-12.8-6.4-25.6-6.4-38.4l275.2 0c-6.4 12.8-6.4 25.6-6.4 38.4 0 44.8 38.4 83.2 83.2 83.2s83.2-38.4 83.2-83.2c0-44.8-32-76.8-76.8-83.2 0 0-6.4 0-6.4 0L364.8 716.8c0 0 0 0 0 0-19.2 0-38.4-19.2-38.4-38.4C332.8 659.2 345.6 640 364.8 640zM787.2 761.6c19.2 0 38.4 19.2 38.4 38.4S812.8 832 787.2 832c-19.2 0-38.4-19.2-38.4-38.4S768 761.6 787.2 761.6zM364.8 832c-19.2 0-38.4-19.2-38.4-38.4 0-19.2 19.2-38.4 38.4-38.4 0 0 0 0 0 0s0 0 0 0c19.2 0 38.4 19.2 38.4 38.4C403.2 819.2 384 832 364.8 832zM768 595.2l-384 0L332.8 371.2l486.4 0L768 595.2zM844.8 262.4 832 326.4 320 326.4 307.2 268.8 844.8 262.4z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-fankui" viewBox="0 0 1026 1024">'+
      ''+
      '<path d="M992.956271 1023.992906l-960.927178 0c-17.714653 0-32.030906-14.316252-32.030906-32.030906l0 0c0-17.714653 14.316252-32.030906 32.030906-32.030906l960.927178 0c17.714653 0 32.030906 14.316252 32.030906 32.030906l0 0C1024.987177 1009.676654 1010.670924 1023.992906 992.956271 1023.992906zM1004.674895 117.811234 907.175942 20.312282C893.562807 6.816333 875.848154 0 858.016314 0c-17.812309 0-35.526962 6.816333-49.042442 20.312282L328.217318 501.088367 195.582024 783.15565c-11.406127 24.433331 7.617106 49.647904 31.230133 49.647904 4.902291 0 9.902237-1.093738 15.01937-3.398401L523.89881 696.867514l480.756554-480.756554C1031.783979 188.88469 1031.783979 144.939849 1004.674895 117.811234zM486.457806 643.625899l-198.298651 93.182593L381.361278 538.529371l348.238447-348.238447 105.096527 105.096527L486.457806 643.625899zM959.32382 170.759884l-79.374147 79.374147-105.096527-105.096527 79.374147-79.374147c0.390621-0.410152 1.601545-1.601545 3.808553-1.601545 2.207008 0 3.398401 1.191393 3.808553 1.601545l97.498953 97.498953c0.390621 0.390621 1.601545 1.601545 1.601545 3.808553S959.714441 170.369264 959.32382 170.759884z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-touxiang-copy-copy-copy" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M266.263 490.301c-2.354 0-4.211 0.34-5.667 0.923 1.979-0.595 4.091-0.923 6.262-0.923h-0.595zM916.297 749.29c0.061-1.201 0.219-2.379 0.474-3.519-0.278 0.523-0.425 1.638-0.474 3.519zM959.66 270.841c0.013-0.049 0.013-0.109 0.013-0.158v-0.559c0 0.242 0 0.485-0.013 0.716zM916.272 270.767c0 0.049 0 0.097 0.013 0.146-0.013-0.255-0.013-0.523-0.013-0.788v0.643zM942.442 921.515c-6.105-45.451-19.455-89.334-39.674-130.441-3.956-8.034-8.143-15.935-12.585-23.678-0.013-0.023-0.023-0.049-0.049-0.073-19.248-32.598-42.866-62.866-70.39-89.881l-0.013-0.013c-5.984-5.874-12.148-11.602-18.496-17.162-45.257-39.662-97.503-69.068-153.221-86.957 10.085-5.583 19.843-11.845 29.213-18.774 10.668-7.865 20.826-16.603 30.378-26.154 50.231-50.231 77.903-117.030 77.903-188.076 0-71.046-27.67-137.844-77.903-188.076-49.322-49.322-114.615-76.883-184.205-77.878-1.105-0.013-2.208-0.023-3.313-0.023-1.105 0-2.208 0.013-3.313 0.023-69.59 0.995-134.882 28.557-184.205 77.878-50.231 50.231-77.903 117.030-77.903 188.076 0 71.046 27.67 137.844 77.903 188.076 9.552 9.552 19.71 18.29 30.378 26.154 9.37 6.93 19.127 13.193 29.213 18.774-55.718 17.889-107.965 47.295-153.221 86.957-6.348 5.558-12.512 11.286-18.496 17.162-27.549 27.039-51.19 57.331-70.451 89.966-4.442 7.743-8.629 15.644-12.585 23.678-20.22 41.106-33.569 84.991-39.674 130.441-1.953 14.563 8.265 27.95 22.816 29.904 1.201 0.158 2.403 0.242 3.581 0.242 1.079 0 2.135-0.061 3.191-0.194 10.523-2.293 19.018-10.874 20.668-22.149 12.257-84.128 52.356-160.576 109.991-218.794 68.4-69.117 161.498-112.553 262.108-112.722h0.57c100.391 0.34 193.27 43.74 261.537 112.722 57.635 58.218 97.734 134.663 109.991 218.794 1.651 11.25 10.109 19.819 20.607 22.137 0.023 0 0.036 0.013 0.061 0.013 1.056 0.133 2.112 0.194 3.191 0.194 1.178 0 2.379-0.085 3.581-0.242 14.551-1.953 24.77-15.341 22.816-29.904zM519.516 553.093c-0.533 0-1.069 0-1.602-0.013-99.275-0.729-187.785-69.699-211.972-162.214-0.268-1.007-0.533-2.027-0.778-3.045-3.787-15.292-5.802-31.19-5.802-47.514 0-16.323 2.015-32.404 5.802-47.963 0.242-1.043 0.51-2.076 0.778-3.107 24.321-94.833 113.657-170.211 213.574-170.211h1.141c99.919 0 189.253 75.379 213.574 170.211 0.268 1.031 0.533 2.063 0.778 3.107 3.787 15.559 5.802 31.639 5.802 47.963 0 16.323-2.015 32.222-5.802 47.514-0.242 1.020-0.51 2.038-0.778 3.045-24.188 92.515-112.698 161.486-211.972 162.214-0.91 0.013-1.821 0.013-2.743 0.013z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-jimi" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M781.888 325.632c-28.416-19.008-140.416-78.72-122.944-113.216 14.72-29.12 76.032-129.536 13.376-140.48C609.664 61.056 586.24 110.72 586.24 110.72S565.312 0.896 509.504 0.896 443.712 80.256 451.136 120.32c3.776 20.352-41.984-61.696-77.248-61.696-44.48 0-59.008 39.808-48 94.4 0 0 55.296 47.36 55.296 65.536S237.12 323.328 219.776 331.392C188.032 346.048-2.048 444.288 23.68 675.456c25.856 231.104 255.104 351.232 490.56 347.584 235.456-3.584 488-93.504 488.576-370.944C1003.392 367.68 803.456 340.032 781.888 325.632zM509.888 976c-245.248 3.392-447.168-177.536-436.544-349.568 9.6-155.584 133.696-233.408 133.696-233.408s115.52-51.328 183.424-110.72c67.904-59.264-0.384-115.52-0.384-115.52 0-69.76 84.608 65.92 80.96 54.336C467.392 209.472 479.552 97.024 510.464 90.176 546.112 82.304 549.76 221.12 549.76 221.12s68.928-106.368 87.424-84.928c9.984 11.584-17.728 61.248-23.616 84.928-16.832 66.496 102.976 126.656 158.4 152.576 89.344 41.792 187.264 123.968 178.688 300.16C941.888 850.112 755.072 972.544 509.888 976zM517.504 360.704c-76.48 0-129.216 37.184-129.216 37.184s-16.448 101.184-24.32 263.744c-7.808 162.56 153.344 302.528 153.344 302.528 156.48-130.56 147.52-281.408 147.904-319.68s-23.808-240.768-23.808-240.768S598.528 360.64 517.504 360.704zM517.952 902.656c0 0-115.072-110.08-109.568-238.08C414.016 536.832 425.472 440.32 425.472 440.32S463.104 411.072 517.76 411.008c57.856-0.064 88.64 33.856 88.64 33.856s17.6 176.256 17.28 206.336C623.36 681.344 629.824 800 517.952 902.656zM268.416 442.688C209.664 426.112 145.28 470.272 124.736 541.44s10.432 142.272 69.248 158.976c58.88 16.512 123.2-27.776 143.744-98.88C358.272 530.368 327.232 459.264 268.416 442.688zM293.248 588.992c-12.992 45.056-51.264 73.728-85.568 64-34.176-9.664-51.456-53.952-38.4-98.944 12.928-44.992 51.264-73.6 85.568-64C289.024 499.712 306.304 544.064 293.248 588.992zM891.648 550.016c-19.136-71.168-79.04-115.328-133.824-98.752-54.784 16.576-83.648 87.68-64.512 158.848 19.136 71.04 79.04 115.392 133.888 98.88C881.92 692.352 910.848 621.184 891.648 550.016zM814.464 661.568c-31.936 9.728-67.584-18.944-79.744-64-12.16-44.992 3.904-89.28 35.84-98.944 31.936-9.6 67.648 19.008 79.68 64C862.4 607.616 846.272 651.904 814.464 661.568z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-tubiao_shang-32" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M796.444444 711.111111v-113.777778l-284.444444-284.444444-284.444444 284.444444v113.777778l284.444444-284.444444 284.444444 284.444444z" fill="#1A1B1B" ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
