function encode(){
    let str = document.getElementById("input-text").value.toLowerCase()

    if(str != ""){
        let res = str.replace(/e/g, "enter");
        res = res.replace(/i/g, "imes");
        res = res.replace(/a/g, "ai");
        res = res.replace(/o/g, "ober");
        res = res.replace(/u/g, "ufat");

        document.getElementById("output-text").innerHTML = res;

        document.getElementById("right-section").style.display = "none";
        document.getElementById("right-section-after").style.display = "inline-block";
    } else {
        document.getElementById("right-section").style.display = "inline-block";
        document.getElementById("right-section-after").style.display = "none";
    }

    
}

function decode(){
    let str = document.getElementById("input-text").value.toLowerCase();

    if(str != ""){
        let res = str.replace(/enter/g, "e");
        res = res.replace(/imes/g, "i");
        res = res.replace(/ai/g, "a");
        res = res.replace(/ober/g, "o");
        res = res.replace(/ufat/g, "u");

        document.getElementById("output-text").innerHTML = res;

        document.getElementById("right-section").style.display = "none";
        document.getElementById("right-section-after").style.display = "inline-block";
    } else {
        document.getElementById("right-section").style.display = "inline-block";
        document.getElementById("right-section-after").style.display = "none";
    }
    
}

function copyToClipboard(){
    var range = document.createRange();
    range.selectNode(document.getElementById("output-text"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}

document.getElementById("btn-encode").onclick = encode;
document.getElementById("btn-decode").onclick = decode;
document.getElementById("btn-cpy").onclick = copyToClipboard;
