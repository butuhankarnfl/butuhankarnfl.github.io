function degerial() {
    const name = document.getElementById('isim_soyisim').value;
    const vize_notu = Number(document.getElementById('vize').value);
    const final_notu = Number(document.getElementById('final').value);
    const sonucAlani = document.getElementById('sonuc');

    if (name === '' || vize.value === '' || final.value === '') {
        sonucAlani.innerHTML = "<b style='color:red;'>Lütfen Boş Alan Bırakmayın!</b>";
    } else {
        
        const ortalama = vize_notu * 0.4 + final_notu * 0.6;
        
      
        let harf = "";
        if (ortalama >= 90) harf = "AA";
        else if (ortalama >= 80) harf = "BA";
        else if (ortalama >= 70) harf = "BB";
        else if (ortalama >= 60) harf = "CB";
        else if (ortalama >= 50) harf = "CC";
        else harf = "FF";

      
        const durum = ortalama >= 50 ? "Geçti" : "Kaldı";
        const durumClass = ortalama >= 50 ? "basarili" : "basarisiz";

       
        sonucAlani.innerHTML = `
            <h3>${name}</h3>
            <p>Ortalama: ${ortalama.toFixed(2)}</p>
            <p>Harf Notu: ${harf}</p>
            <p>Durum: <span class="${durumClass}">${durum}</span></p>
        `;
    }
}