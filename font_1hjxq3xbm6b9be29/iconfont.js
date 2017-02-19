;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-msnui-cart" viewBox="0 0 1031 1024">'+
      ''+
      '<path d="M366.498 747.328q17.47 0 33.101 6.437t27.125 17.929 18.389 27.125 6.896 33.101-6.896 33.101-18.389 27.125-27.125 18.389-33.101 6.896q-18.389 0-34.021-6.896t-27.125-18.389-18.389-27.125-6.896-33.101 6.896-33.101 18.389-27.125 27.125-17.929 34.021-6.437zM748.999 749.166q17.47 0 33.561 6.437t27.584 17.929 18.389 27.125 6.896 33.101-6.896 33.101-18.389 27.125-27.584 18.389-33.561 6.896-33.101-6.896-27.123-18.389-18.389-27.125-6.896-33.101 6.896-33.101 18.389-27.125 27.123-17.929 33.101-6.437zM903.47 226.906q25.745 0 39.997 6.896t20.228 17.010 5.517 21.607-3.218 19.768-11.954 34.021-19.768 56.548-21.148 61.144-17.010 47.813q-11.954 36.779-29.883 51.030t-44.595 14.252h-482.723l12.873 82.752h464.333q44.136 0 44.136 37.699 0 18.389-8.735 32.182t-34.48 12.873h-481.803q-18.389 0-30.802-8.276t-20.688-21.607-13.333-28.963-7.816-29.423q-0.92-5.517-5.057-26.665t-10.115-52.869-13.333-70.8-14.713-78.615q-17.47-92.867-39.538-206.881h-68.961q-13.793 0-22.987-6.896t-15.172-16.55-8.276-20.688-2.298-20.228q0-18.389 12.413-30.343t33.561-11.034h92.867q18.389 0 29.423 5.517t17.47 13.793 9.195 17.010 4.598 15.172q1.839 7.356 3.678 20.688t3.678 27.125q2.759 16.55 5.517 34.94h628.918zM869.449 308.739l-575.589-1.839 32.182 166.424 480.884 0.92z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-jian" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M501.260913 526.843056l53.671387 0 0 107.339704-53.671387 0 0-107.339704Z"  ></path>'+
      ''+
      '<path d="M851.23368 64.384379 172.765297 64.384379c-59.156308 0-107.125833 47.969525-107.125833 107.125833l0 678.467359c0 59.154261 47.969525 107.123786 107.125833 107.123786l678.468382 0c59.156308 0 107.125833-47.969525 107.125833-107.123786L958.359512 171.510212C958.358489 112.354927 910.388964 64.384379 851.23368 64.384379zM711.463356 204.817806c26.565029 20.400632 52.002374 40.817638 76.042907 60.930721l-31.30089 28.520567c-23.482831-21.242813-48.651047-42.485627-76.042907-64.301492L711.463356 204.817806zM264.225335 258.487146c25.148773 34.938744 50.587142 72.116481 76.024487 111.805412L291.042097 401.609821c-31.298843-50.873668-56.736189-89.451288-76.024487-116.28647L264.225335 258.487146zM197.127148 724.477252c23.196305-67.366294 46.965661-151.225213 71.561849-251.306606 18.444071 7.546883 36.335556 14.251585 53.670363 20.13048-17.891486 65.12423-41.930995 147.871839-71.560826 248.223385L197.127148 724.477252zM501.260913 705.741539l-53.671387 0L447.589526 491.061109l161.013137 0 0 178.903599L501.260913 669.964708 501.260913 705.741539zM429.699064 437.390745 429.699064 401.609821l178.902576 0 0 35.780925L429.699064 437.390745zM823.284117 347.939457 662.560576 347.939457c1.39886 99.239212 11.453866 178.61605 30.455639 238.165308 23.483854-54.780651 43.058678-116.28647 58.707077-184.494944l53.671387 15.649422c-27.121707 88.608084-59.532885 166.337399-97.28572 232.860489 8.391111 37.178761 18.46556 65.681932 29.634948 85.255733 10.629081 15.936971 18.174941 12.298094 22.370497-10.631128 3.6399-24.593118 6.702656-54.780651 9.500375-90.562599 22.639626 7.261381 40.529065 12.300141 53.66934 15.649422-5.592368 45.855374-11.740392 83.303264-18.444071 112.935142-8.945743 34.112935-23.197328 50.875714-43.059702 50.318012-17.315364 0.557702-33.252335-10.057053-48.346101-31.298843-15.092743-24.057929-27.676339-51.446719-38.020942-81.634252-32.715099 43.056632-68.495 80.505545-107.071597 112.933095-15.650445-11.455913-32.142048-21.529339-49.189306-30.187533 52.828182-38.57762 99.239212-84.700077 139.212622-138.926096-28.788673-64.856124-45.011146-163.540703-48.919153-296.03225L411.810648 347.938434l0 158.502967c0 126.629026-31.299867 228.647537-93.933369 306.642912-12.852726-16.205077-23.195282-27.677363-31.298843-34.381042 47.521317-68.49807 71.561849-158.772097 71.561849-271.15056L358.140285 312.159556l250.462379 0c-0.555655-36.623106-0.842181-72.403007-0.842181-107.34175l54.226019 0c0 34.669614 0 70.449515 0.287549 107.34175L823.284117 312.159556 823.284117 347.939457z"  ></path>'+
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
