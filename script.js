document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("akanForm");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const day = parseInt(document.getElementById("day").value);
        const month = parseInt(document.getElementById("month").value);
        const year = parseInt(document.getElementById("year").value);
        const gender = document.querySelector("input[name='gender']:checked")?.value;

        
        if (isNaN(day) || isNaN(month) || isNaN(year) || !gender) {
            resultDiv.textContent = "Please fill all fields correctly.";
            return;
        }

        
        if (day < 1 || day > 31 || month < 1 || month > 12) {
            resultDiv.textContent = "Please enter a valid date.";
            return;
        }

    
        const birthDate = new Date(year, month - 1, day); 

        
        if (birthDate.getDate() !== day || birthDate.getMonth() !== (month - 1) || birthDate.getFullYear() !== year) {
            resultDiv.textContent = "Invalid date. Please check again.";
            return;
        }

        const dayOfWeek = birthDate.getDay(); 

        
        const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

        let akanName = "";

        if (gender === "male") {
            akanName = maleNames[dayOfWeek];
        } else if (gender === "female") {
            akanName = femaleNames[dayOfWeek];
        }

        
        resultDiv.textContent = `Your Akan name is: ${akanName}`;
    });
});
