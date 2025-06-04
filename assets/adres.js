let adlar = [];
let soyadlar = [];
let adresler = [];
let telefonlar = [];
let epostalar = [];

function kontrol(){
adlar = JSON.parse(localStorage.getItem("adlar")) || [];
soyadlar = JSON.parse(localStorage.getItem("soyadlar")) || [];
adresler = JSON.parse(localStorage.getItem("adresler")) || [];
telefonlar = JSON.parse(localStorage.getItem("telefonlar")) || [];
epostalar = JSON.parse(localStorage.getItem("epostalar")) || [];

}



function kaydedilecekler (){
let mesaj = alert('Adres defterine hosgeldiniz.')
let ad = prompt('Adi giriniz: ');
let soyad = prompt('Soyadi giriniz: ');
let adres = prompt('Adresi giriniz: ');
let telefon = Number(prompt('Telefonu giriniz: '));
let eposta = prompt('Epostayi giriniz: ');

adlar.push(ad);
soyadlar.push(soyad);
adresler.push(adres);
telefonlar.push(telefon);
epostalar.push(eposta);

localStorage.setItem('adlar', JSON.stringify(adlar));
localStorage.setItem('soyadlar', JSON.stringify(soyadlar));
localStorage.setItem('adresler', JSON.stringify(adresler));
localStorage.setItem('telefonlar', JSON.stringify(telefonlar));
localStorage.setItem('epostalar', JSON.stringify(epostalar));


}


kontrol();
kaydedilecekler();