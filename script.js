
document.getElementById("iletisimFormu")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let isim = document.getElementById("isim").value;

    alert("Teşekkürler " + isim + "! Mesajınız alındı.");

    document.getElementById("iletisimFormu").reset();

});
