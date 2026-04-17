function hesapla() {
    // Elemanları seçelim
    const deger = document.getElementById('deger').value;
    const tip = document.getElementById('donusumTipi').value;
    const sonucAlani = document.getElementById('sonucAlani');

    // Boş değer kontrolü
    if (deger === "") {
        alert("Lütfen bir değer giriniz!");
        return;
    }

    const sayi = Number(deger);
    let sonuc = 0;

    // Seçilen tipe göre hesaplama yapalım
    switch (tip) {
        case "m-km":
            sonuc = sayi / 1000;
            break;
        case "c-f":
            sonuc = (sayi * 9/5) + 32;
            break;
        case "kg-gr":
            sonuc = sayi * 1000;
            break;
        default:
            sonuc = 0;
    }

    // Sonucu ekranda gösterelim
    sonucAlani.style.display = "block";
    // Binlik ayırıcı eklemek için toLocaleString kullanabilirsin (Örn: 50.000)
    sonucAlani.innerText = "Sonuç: " + sonuc.toLocaleString('tr-TR');
}