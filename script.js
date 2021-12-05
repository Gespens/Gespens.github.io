
function menu() {
	Array.from(document.querySelectorAll(".side-menu")).forEach(el => el.classList.toggle("show"));
}
function click1() {
	location.href="https://www.youtube.com/watch?v=YblJlB3mWoQ";
}
function click2() {
	location.href="https://www.youtube.com/watch?v=tJpSVqmG27I";
}


const box=document.getElementById('box');
(async()=>{

	box.innerHTML="";
	const pogoda=await fetch('https://danepubliczne.imgw.pl/api/data/synop/station/gdansk?type=json');
	const data=await pogoda.json();
	box.innerText=`Data pomiaru: ${data.data_pomiaru}\n`;
	box.innerText+=`Stacja: ${data.stacja}\n`;
	box.innerText+=`Temperatura: ${data.temperatura}ºC\n`;
	box.innerText+=`Prędkość wiatru: ${data.predkosc_wiatru} m/s \n`;
	box.innerText+=`Ciśnienie: ${data.cisnienie} hPa \n`;

	box.innerHTML+="<span style='font-size:100px'>🌡️</span>"



})() 