document.addEventListener("DOMContentLoaded", function() {
    const output = document.getElementById("outputLayar");
    let kontenHTML = "";

    // Poin I: Latihan Praktik
    console.log("Poin I: Latihan Praktik")
    kontenHTML += "<strong>Poin I: Latihan Praktik</strong><br><br>";

    // 1. Identitas
    let namaLengkap = "Putu Chesta Radithya Wiryawan";
    let kelas = "XI";
    console.log("1. Identitas: ", namaLengkap, "Kelas ", kelas);
    kontenHTML += `1. Identitas: ${namaLengkap}, Kelas ${kelas}<br>`;

    // 2. Variabel
    let nama = "Putu Chesta Radithya Wiryawan";
    let umur = 16;
    let jurusan = "RPL";
    console.log("2. Variabel: ", nama, " , Umur ", umur, " , Jurusan", jurusan);
    kontenHTML += `2. Variabel: ${nama}, Umur ${umur}, Jurusan ${jurusan}<br>`;

    // 3. Operasi Matematika
    let angka1 = 20;
    let angka2 = 5;
    console.log("3. Operasi Angka (20 dan 5)")
    console.log("- Penjumlahan: ", angka1 + angka2,
                   "- Pengurangan: ", angka1 - angka2,
                   "- Perkalian: ", angka1 * angka2,
                   "- Pembagian: ", angka1 / angka2);

    kontenHTML += `3. Operasi Angka (20 dan 5): <br>
                   - Penjumlahan: ${angka1 + angka2} <br>
                   - Pengurangan: ${angka1 - angka2} <br>
                   - Perkalian: ${angka1 * angka2} <br>
                   - Pembagian: ${angka1 / angka2}<br>`;


    // 4 & 5. If Else
    let nilai = 60; // Variabel Nilai
    if (nilai >= 75) {
        console.log("Nilai: ", nilai);
        console.log("Status: Lulus")
        kontenHTML += `Nilai: ${nilai} <br>
                       Status: Lulus`;
    } else {
        console.log("Nilai: ", nilai);
        console.log("Status: Belum Lulus")
        kontenHTML += `Nilai: ${nilai} <br>
                       Status: Belum Lulus`
    }

    console.log("Poin J: Tantangan Mini");
    kontenHTML += "<br><br><strong>Poin J: Tantangan Mini</strong><br><br>";

    let namaSiswa = "Budi";
    let nilaiSiswa = 75; // Variabel Nilai Siswa

    if (nilaiSiswa >= 75) {
        console.log("Nama Siswa: ", namaSiswa);
        console.log("Nilai: ", nilaiSiswa);
        console.log("Status: Lulus");
        kontenHTML += `Nama siswa: ${namaSiswa} <br>
               Nilai: ${nilaiSiswa} <br>
               Status: Lulus <br>`;
    } else {
        console.log("Nama Siswa: ", namaSiswa);
        console.log("Nilai: ", nilaiSiswa);
        console.log("Status: Belum Lulus");
        kontenHTML += `Nama siswa: ${namaSiswa} <br>
               Nilai: ${nilaiSiswa} <br>
               Status: Belum Lulus <br>`;
    }

    // Semua hasil proses yang telah diselesaikan kemudian dimasukkan ke dalam variabel kontenHTML akan ditampilkan ke browser
    output.innerHTML += kontenHTML;
});

// Menghitung Luas Lingkaran (Luas = Pi * r * r)
function hitungLuasLingkaran() {
    // Mencari elemen input untuk radius lingkaran
    const inputRadius = document.getElementById('inputRadius');
    const radius = parseFloat(inputRadius.value);

    // Validasi input nilai
    if (isNaN(radius) || radius < 0) {
        alert('Masukkan nilai radius yang valid (bilangan non-negatif).');
        return;
    }

    // Kalkulasi Luas Lingkaran
    const area = Math.PI * radius * radius;

    // Bulatkan hasilnya
    const hasilFormatted = Math.round(area);

    // Output hasilnya ke div pada halaman web
    const hasilDiv = document.getElementById('hasilLingkaran');
    hasilDiv.innerHTML = `
        <div class="alert alert-primary shadow-sm" role="alert">
            <h5>Hasil Perhitungan</h5>
            <p class="mb-1"><strong>Radius (r):</strong> ${radius} cm</p>
            <p class="mb-1"><strong>Luas Lingkaran:</strong> ${hasilFormatted} cm&sup2</p>
            <p class="mb-0 text-muted small">Rumus: Luas = &pi; &times; r&sup2;</p>
        </div>
    `;

    // Output juga hasilnya ke console
    console.log('===== Kalkulator Luas Lingkaran =====');
    console.log(`Radius (r): ${radius}`);
    console.log(`Luas Lingkaran: ${hasilFormatted}`);
    console.log(`Rumus: Luas = Math.PI * ${radius} * ${radius} = ${area}`);
    console.log('=======================================');
}

//Menghitung Luas Segitiga (Luas = 1/2 * alas * tinggi)
function hitungLuasSegitiga() {
    // Mencari elemen input alas dan tinggi segitiga
    const inputAlas = document.getElementById('inputAlas');
    const inputTinggi = document.getElementById('inputTinggi');
    const alas = parseFloat(inputAlas.value);
    const tinggi = parseFloat(inputTinggi.value);

    // Validasi input
    if (isNaN(alas) || alas < 0) {
        alert('Masukkan nilai alas yang valid (bilangan non-negatif).');
        return;
    }
    if (isNaN(tinggi) || tinggi < 0) {
        alert('Masukkan nilai tinggi yang valid (bilangan non-negatif).');
        return;
    }

    // Hitung luas segitiga
    const area = 0.5 * alas * tinggi;

    // Bulatkan hasilnya
    const hasilFormatted = Math.round(area);

    // Output hasilnya pada halaman HTML
    const hasilDiv = document.getElementById('hasilSegitiga');
    hasilDiv.innerHTML = `
        <div class="alert alert-success shadow-sm" role="alert">
            <h5>Hasil Perhitungan</h5>
            <p class="mb-1"><strong>Alas (a):</strong> ${alas} cm</p>
            <p class="mb-1"><strong>Tinggi (t):</strong> ${tinggi} cm</p>
            <p class="mb-1"><strong>Luas Segitiga:</strong> ${hasilFormatted} cm&sup2</p>
            <p class="mb-0 text-muted small">Rumus: Luas = (1/2) &times; alas &times; tinggi</p>
        </div>
    `;

    // Output juga hasilnya ke console
    console.log('===== Kalkulator Luas Segitiga =====');
    console.log(`Alas (a): ${alas}`);
    console.log(`Tinggi (t): ${tinggi}`);
    console.log(`Luas Segitiga: ${hasilFormatted}`);
    console.log(`Rumus: Luas = 0.5 * ${alas} * ${tinggi} = ${area}`);
    console.log('=======================================');
}


// Menghitung Luas Persegi Panjang (panjang * lebar)
function hitungLuasPersegiPanjang() {
    // Mencari elemen input untuk panjang dan lebar
    const inputPanjang = document.getElementById('inputPanjang');
    const inputLebar = document.getElementById('inputLebar');
    const panjang = parseFloat(inputPanjang.value);
    const lebar = parseFloat(inputLebar.value);

    // Validasi input
    if (isNaN(panjang) || panjang < 0) {
        alert('Masukkan nilai panjang yang valid (bilangan non-negatif).');
        return;
    }
    if (isNaN(lebar) || lebar < 0) {
        alert('Masukkan nilai lebar yang valid (bilangan non-negatif).');
        return;
    }

    // Hitung luas persegi panjang
    const area = panjang * lebar;

    // Bulatkan Hasilnya
    const hasilFormatted = Math.round(area);

    // Tampilkan hasilnya pada halaman HTML
    const hasilDiv = document.getElementById('hasilPersegiPanjang');
    hasilDiv.innerHTML = `
        <div class="alert alert-warning shadow-sm" role="alert">
            <h5>Hasil Perhitungan</h5>
            <p class="mb-1"><strong>Panjang (p):</strong> ${panjang} cm</p>
            <p class="mb-1"><strong>Lebar (l):</strong> ${lebar} cm</p>
            <p class="mb-1"><strong>Luas Persegi Panjang:</strong> ${hasilFormatted} cm&sup2</p>
            <p class="mb-0 text-muted small">Rumus: Luas = panjang &times; lebar</p>
        </div>
    `;

    // Output juga hasilnya ke Console
    console.log('===== Kalkulator Luas Persegi Panjang =====');
    console.log(`Panjang (p): ${panjang}`);
    console.log(`Lebar (l): ${lebar}`);
    console.log(`Luas Persegi Panjang: ${hasilFormatted}`);
    console.log(`Rumus: Luas = ${panjang} * ${lebar} = ${area}`);
    console.log('=======================================');
}