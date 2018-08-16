### onblur
### onchange
### onclick
### onclose

### ondblclick
### onerror
### onfocus
### oninput
### onkeydown
### onkeypress
### onkeyup
### onload
### onloadend  
    img.onloadend = funcRef;
    
    // 'loadstart' fires first, then 'load', then 'loadend'
    image.addEventListener('load', function(e) {
    console.log('Image loaded');
    });

    image.addEventListener('loadstart', function(e) {
    console.log('Image load started');
    });

    image.addEventListener('loadend', function(e) {
    console.log('Image load finished');
    });
    
### onloadstart
### onmousedown
### onmousemove
### onmouseout
### onmouseover
### onpointerenter
### onpointerleave
### onpointermove
### onpointerout
### onpointerover
### onpointerup
### onreset
    The reset event is raised when the user clicks a reset button in a form (<input type="reset"/>).
### onresize
    example window.onresize = doFunc;
### onscroll
### onselect
### onsubmit
