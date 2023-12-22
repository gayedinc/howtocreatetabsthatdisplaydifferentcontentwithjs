const btns = document.querySelectorAll(".tab-btn"); // Sekme düğmelerini temsil eden elementlerdir.
const about = document.querySelector(".about"); // Sekme alanını temsil eder.
const articles = document.querySelectorAll(".content"); // Her bir sekmenin içeriğini temsil eden elementlerdir.

about.addEventListener("click", function (e) { // Kullanıcı "about" elementine tıkladığında, bu fonksiyon çalışacaktır.
    const id = e.target.dataset.id; // Tıklanan elementin data-id özelliğinin değerini alır. Bu değer, tıklanan sekmenin kimliğini temsil eder.
    if (id) { // Eğer id değeri varsa
        // Remove Active from Other Buttons
        btns.forEach(function (btn) {
            btn.classList.remove("active"); // Tüm sekme düğmelerinden "active" sınıfını kaldırır. Bu, tüm düğmelerin etkinliğini kaldırarak seçilen sekmenin vurgulanmasını sağlar.
        });
        e.target.classList.add("active"); // Tıklanan sekme düğmesine "active" sınıfını ekler, bu da tıklanan sekmenin vurgulanmasını sağlar.
        // Hide Other Articles
        articles.forEach(function (article) { // Tüm içerik alanlarından "active" sınıfını kaldırır. Bu, tüm içerikleri gizleyerek sadece seçilen sekmenin içeriğini gösterir.
            article.classList.remove("active");
        });
        const element = document.getElementById(id); // id değerine sahip olan HTML elementini seçer. Sekmenin içeriğini temsil eden bir element.
        element.classList.add("active"); // Seçilen sekmenin içeriğine "active" sınıfını ekler, bu da içeriğin görünür hale gelmesini sağlar.
    }
});