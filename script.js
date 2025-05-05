
let txt = document.getElementById("Text")
let qrImage = document.getElementById("qrImg")

function qrCode(){
    if (txt.value.length > 0) {
        let api = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ txt.value;
    qrImage.src = api
    qrImage.classList.add("qrImg")
    } else{
        qrImage.src = ""; 
        txt.classList.add("inpShake")
        setTimeout(()=>{   
        txt.classList.remove("inpShake")
        },1000);
    }
    }
