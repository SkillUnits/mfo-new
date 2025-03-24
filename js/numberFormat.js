document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.getElementById("phone");
    const submitBtn = document.getElementById("submitBtn");

    phoneInput.addEventListener("input", function () {
        let numbers = phoneInput.value.replace(/\D/g, ""); // Видаляємо все, крім цифр
        if (numbers.startsWith("7")) {
            numbers = numbers.slice(1);
        } else if (numbers.startsWith("8")) {
            numbers = numbers.slice(1); // Замінюємо 8 на 7
        }

        phoneInput.value = formatPhone(numbers);

        if (numbers.length === 10) {
            submitBtn.classList.add("active");
            submitBtn.disabled = false;
        } else {
            submitBtn.classList.remove("active");
            submitBtn.disabled = true;
        }
    });

    submitBtn.addEventListener("click", function () {
        window.location.href = "offers_test.html";
    });

    function formatPhone(numbers) {
        let formatted = "+7 ";
        if (numbers.length > 0) formatted += `(${numbers.substring(0, 3)}`;
        if (numbers.length > 3) formatted += `)-${numbers.substring(3, 6)}`;
        if (numbers.length > 6) formatted += `-${numbers.substring(6, 8)}`;
        if (numbers.length > 8) formatted += `-${numbers.substring(8, 10)}`;
        return formatted;
    }
});
