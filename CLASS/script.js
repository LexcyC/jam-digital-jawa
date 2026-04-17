const h=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]
const nH={Minggu:5,Senin:4,Selasa:3,Rabu:7,Kamis:8,Jumat:6,Sabtu:9}

const p=["Legi","Pahing","Pon","Wage","Kliwon"]
const nP={Legi:5,Pahing:9,Pon:7,Wage:4,Kliwon:8}

const bln=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]

const artiMap={
7:"Pendiam & bijak",8:"Berwibawa",9:"Cerdas",
10:"Pemimpin",11:"Tangguh",12:"Beruntung",
13:"Kreatif",14:"Berpengaruh",15:"Sukses",
16:"Spiritual",17:"Pemimpin besar"
}

function update(){
let d=new Date()

jam.innerHTML=d.toLocaleTimeString("id-ID")+" WIB"

let hari=h[d.getDay()]
tanggal.innerHTML=`${hari}, ${d.getDate()} ${bln[d.getMonth()]} ${d.getFullYear()}`

let acuan=new Date(1900,0,1)
let sel=Math.floor((d-acuan)/86400000)
let pas=p[sel%5]

weton.innerHTML=hari+" "+pas

let n=nH[hari]+nP[pas]
neptu.innerHTML="Neptu: "+n

let jawaB=["Suro","Sapar","Mulud","Bakda Mulud","Jumadil Awal","Jumadil Akhir","Rejeb","Ruwah","Pasa","Sawal","Dulkangidah","Besar"]
jawa.innerHTML="Bulan Jawa: "+jawaB[d.getMonth()]

arti.innerHTML="Arti: "+(artiMap[n]||"Istimewa")
}

setInterval(update,1000)
update()

/* DARK LIGHT */
function toggleMode(){
document.body.classList.toggle("light")
localStorage.setItem("mode",
document.body.classList.contains("light")?"light":"dark")
}

if(localStorage.getItem("mode")==="light"){
document.body.classList.add("light")
}

/* SERVICE WORKER */
if("serviceWorker" in navigator){
navigator.serviceWorker.register("service-worker.js")
}