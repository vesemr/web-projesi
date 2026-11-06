# AI_LOG.md

## Tarih: 16.10.2026

**Amaç:** Kişisel Fitness ve Spor Rehberi Web Sitesi

**AI'a Sorduğum:** Önlisans Bilgisayar Programcılığı öğrencisiyim, temel HTML/CSS/JS biliyorum . Kişisel Fitness ve Spor Rehberi Web Sitesi yapmak istiyorum Backend kullanmayacağız, sadece localStorage olacak; bana hemen tüm kodu yazma . Bana projenin temel (MVP) özelliklerini öner ve adım adım nasıl ilerlemem gerektiğini anlat 

**AI Önerisi:** Web tasarımı dersin için sana hem kolay yapılabilecek hem de öğretmene sunulduğunda güzel görünecek bir proje hazırlayalım.


# Proje: FitLife – Fitness ve Spor Rehberi


12

Web sitesinde bulunacak özellikler:

1. Ana sayfa – Siteyi tanıtan bölüm.
2. Antrenmanlar – Göğüs, sırt, kol ve bacak egzersizleri.
3. Beslenme – Sağlıklı beslenme önerileri.
4. Hakkımızda – Site hakkında bilgiler.
5. İletişim – Kullanıcının mesaj gönderebileceği alan.

# 1. Proje dosyaları

Bilgisayarında `FitLife` adında bir klasör oluştur ve içine şu üç dosyayı ekle:

```
FitLife/
│
├── index.html
├── style.css
└── script.js
```

- HTML: Sitenin iskeletini oluşturur.
- CSS: Renkleri, tasarımı ve düzeni belirler.
- JavaScript: Butonlara ve etkileşimlere işlev kazandırır.

# 2. HTML kodları – index.html

Bu dosya internet sitesinin ana yapısını oluşturur.

```

<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FitLife - Fitness Rehberi</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- Menü -->
    <header>
        <h1>FIT<span>LIFE</span></h1>

        <nav>
            <a href="#anasayfa">Ana Sayfa</a>
            <a href="#antrenman">Antrenmanlar</a>
            <a href="#beslenme">Beslenme</a>
            <a href="#iletisim">İletişim</a>
        </nav>
    </header>

    <!-- Ana Sayfa -->
    <section id="anasayfa" class="hero">
        <h2>Güçlü Bir Vücut, Sağlıklı Bir Yaşam!</h2>
        <p>Fitness yolculuğuna bugün başla.</p>
        <a href="#antrenman" class="btn">Antrenmanları Keşfet</a>
    </section>

    <!-- Antrenmanlar -->
    <section id="antrenman">
        <h2>Antrenman Programları</h2>

        <div class="cards">
            <div class="card">
                <h3>Göğüs Antrenmanı</h3>
                <p>Bench Press, Şınav ve Dumbbell Press.</p>
            </div>

            <div class="card">
                <h3>Kol Antrenmanı</h3>
                <p>Biceps Curl, Hammer Curl ve Triceps.</p>
            </div>

            <div class="card">
                <h3>Bacak Antrenmanı</h3>
                <p>Squat, Leg Press ve Lunge.</p>
            </div>
        </div>
    </section>

    <!-- Beslenme -->
    <section id="beslenme">
        <h2>Sağlıklı Beslenme</h2>
        <p>
            Kas gelişimi ve sağlıklı yaşam için dengeli beslen,
            yeterli protein al ve su tüketimini ihmal etme.
        </p>
    </section>

    <!-- İletişim -->
    <section id="iletisim">
        <h2>Bize Ulaşın</h2>

        <form id="iletisimFormu">
            <input type="text" id="isim" placeholder="Adınız" required>
            <input type="email" id="email" placeholder="E-posta adresiniz" required>
            <textarea id="mesaj" placeholder="Mesajınız" required></textarea>
            <button type="submit">Gönder</button>
        </form>
    </section>

    <!-- Alt Bilgi -->
    <footer>
        <p>© 2026 FitLife | Tüm Hakları Saklıdır.</p>
    </footer>

    <script src="script.js"></script>

</body>
</html>

```

# 3. CSS kodları – style.css

CSS sayesinde sitemize renk, tasarım, kartlar ve düzen ekliyoruz.

```

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #111;
    color: white;
}

/* Menü */
header {
    background-color: #1b1b1b;
    padding: 20px 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header h1 {
    color: white;
}

header span {
    color: #39d353;
}

nav a {
    color: white;
    text-decoration: none;
    margin-left: 20px;
}

nav a:hover {
    color: #39d353;
}

/* Ana sayfa */
.hero {
    text-align: center;
    padding: 120px 20px;
    background: linear-gradient(135deg, #171717, #263c2b);
}

.hero h2 {
    font-size: 35px;
    margin-bottom: 20px;
}

.hero p {
    margin-bottom: 30px;
}

.btn {
    background-color: #39d353;
    color: black;
    padding: 12px 25px;
    text-decoration: none;
    border-radius: 5px;
}

/* Bölümler */
section {
    padding: 60px 8%;
    text-align: center;
}

section h2 {
    margin-bottom: 30px;
    color: #39d353;
}

/* Kartlar */
.cards {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

.card {
    background-color: #242424;
    padding: 35px 20px;
    width: 250px;
    border-radius: 10px;
    transition: 0.3s;
}

.card:hover {
    transform: translateY(-8px);
    background-color: #303b32;
}

.card h3 {
    margin-bottom: 15px;
    color: #39d353;
}

/* İletişim */
form {
    max-width: 400px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

input, textarea {
    padding: 12px;
    border: none;
    border-radius: 5px;
}

textarea {
    height: 120px;
}

button {
    padding: 12px;
    background-color: #39d353;
    border: none;
    cursor: pointer;
    font-weight: bold;
    border-radius: 5px;
}

button:hover {
    background-color: #269c3b;
}

/* Alt bilgi */
footer {
    background-color: #1b1b1b;
    text-align: center;
    padding: 20px;
}

/* Telefon uyumu */
@media (max-width: 650px) {
    header {
        flex-direction: column;
        gap: 20px;
    }

    nav a {
        margin: 5px;
        display: inline-block;
    }

    .hero h2 {
        font-size: 26px;
    }
}

```

# 4. JavaScript kodları – script.js

Burada küçük bir etkileşim ekliyoruz. Kullanıcı iletişim formunu doldurup gönderdiğinde ekrana mesaj çıkacak.

```

document.getElementById("iletisimFormu")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let isim = document.getElementById("isim").value;

    alert("Teşekkürler " + isim + "! Mesajınız alındı.");

    document.getElementById("iletisimFormu").reset();

});

```



Önemli

&#x20;Bu form şu an gerçek bir sunucuya mesaj göndermez. Sadece JavaScript ile ekranda bilgilendirme gösterir.



# 5. Siteyi nasıl çalıştıracaksın?

1. Bilgisayarında Visual Studio Code programını aç.
2. `FitLife` klasörünü aç.
3. Üç dosyayı oluştur.
4. Yukarıdaki kodları ilgili dosyalara yapıştır.
5. `index.html` dosyasına sağ tıkla.
6. Open with Live Server seçeneğine tıkla. (Yüklü değilse Live Server eklentisini kurabilirsin.)

Siten tarayıcıda açılacaktır.

# 6. HTML, CSS ve JavaScript ne işe yarıyor?

| Teknoloji  | Görevi                                       |
| ---------- | -------------------------------------------- |
| HTML       | Başlık, paragraf, menü ve form oluşturur.    |
| CSS        | Renk, boyut, arka plan ve tasarımı düzenler. |
| JavaScript | Butonlara ve formlara işlev kazandırır.      |

Önemli: Java ile JavaScript farklı programlama dilleridir. Web tasarımında genellikle HTML, CSS ve JavaScript birlikte kullanılır. Eğer hocan özellikle Java istiyorsa Java tarafını ayrıca Java Servlet veya JSP ile geliştirmek gerekir.

# 7. Projeyi geliştirmek için önerilerim

Öğretmenine daha kapsamlı bir proje sunmak istersen şu özellikleri ekleyebiliriz:

- &#x20;Egzersiz fotoğrafları
- &#x20;Günlük kalori hesaplama
- &#x20;Üyelik ve giriş ekranı
- &#x20;Haftalık antrenman programı
- &#x20;Mobil uyumlu tasarım


                

**Benim Eylemim:** AI ile ortak bir şekilde site geliştirmeye başladım

**Ne Öğrendim:** Kodların nasıl ve nerede kullanıldığını ve bilmediğim bir çok öğrendim
