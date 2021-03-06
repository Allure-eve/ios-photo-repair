let {
    fixBySelector,
    fixImgFile
} = require("../lib/fixer.js")

window.onload = function(){
    fixBySelector('#iosphoto')
}

document.getElementById('fileinput').onchange = function(evt){
    let file = evt.target.files[0];
    console.log(file);
    
    fixImgFile(file, {
        width:500
    }).then(res => {
        document.getElementById('iosphoto').src = res
    })
}
