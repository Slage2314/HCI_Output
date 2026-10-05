const form = document.getElementById("detailsForm");
const birthdateInput = document.getElementById("birthdate");
const ageInput = document.getElementById("age");
const error = document.getElementById("error");
const output = document.getElementById("output");
const resetButton = document.getElementById("resetButton");

birthdateInput.addEventListener("change", function () {

    if (!this.value) {
        ageInput.value = "";
        return;
    }

    const birthDate = new Date(this.value);
    const today = new Date();

    let age =
        today.getFullYear() -
        birthDate.getFullYear();

    const monthDiff =
        today.getMonth() -
        birthDate.getMonth();

    if (
        monthDiff < 0 ||
        (
            monthDiff === 0 &&
            today.getDate() < birthDate.getDate()
        )
    ) {
        age--;
    }

    ageInput.value = age;
});

function showError(message) {
    error.textContent = message;
    error.style.display = "block";
}

function hideError() {
    error.textContent = "";
    error.style.display = "none";
}

form.addEventListener("submit", function (event) {

    event.preventDefault();

    hideError();

    const ssNumber =
        document.getElementById("ssNumber").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const confirmEmail =
        document.getElementById("confirmEmail").value.trim();

    const userID =
        document.getElementById("userID").value.trim();

    const confirmUserID =
        document.getElementById("confirmUserID").value.trim();

    const firstName =
        document.getElementById("firstName").value.trim();

    const middleName =
        document.getElementById("middleName").value.trim();

    const lastName =
        document.getElementById("lastName").value.trim();

    const birthdate =
        document.getElementById("birthdate").value;

    const age =
        document.getElementById("age").value;

    const room =
        document.getElementById("room").value.trim();

    const houseLot =
        document.getElementById("houseLot").value.trim();

    const street =
        document.getElementById("street").value.trim();

    const subdivision =
        document.getElementById("subdivision").value.trim();

    const barangay =
        document.getElementById("barangay").value.trim();

    const municipality =
        document.getElementById("municipality").value.trim();

    const province =
        document.getElementById("province").value.trim();

    const zipCode =
        document.getElementById("zipCode").value.trim();

    const number =
        document.getElementById("number").value.trim();

    const password =
        document.getElementById("password").value;

    if (email !== confirmEmail) {
        showError("Email addresses do not match.");
        return;
    }

    if (userID !== confirmUserID) {
        showError("Preferred User IDs do not match.");
        return;
    }

    const userIDPattern =
        /^[A-Za-z][A-Za-z0-9_]{7,19}$/;

    if (!userIDPattern.test(userID)) {
        showError(
            "User ID must be 8-20 characters, start with a letter, and contain only letters, numbers, or underscores."
        );
        return;
    }

    const phonePattern =
        /^09\d{9}$/;

    if (!phonePattern.test(number)) {
        showError(
            "Mobile number must start with 09 and contain 11 digits."
        );
        return;
    }

    const zipPattern =
        /^\d{4}$/;

    if (zipCode !== "" && !zipPattern.test(zipCode)) {
        showError(
            "ZIP Code must contain 4 digits."
        );
        return;
    }

    if (password.length < 8) {
        showError(
            "Password must be at least 8 characters long."
        );
        return;
    }

    const fullName =
        `${firstName} ${middleName} ${lastName}`
        .replace(/\s+/g, " ")
        .trim();

    const address =
        [
            room,
            houseLot,
            street,
            subdivision,
            barangay,
            municipality,
            province,
            zipCode
        ]
        .filter(item => item !== "")
        .join(", ");

    document.getElementById("out-ssNumber").textContent =
        ssNumber;

    document.getElementById("out-email").textContent =
        email;

    document.getElementById("out-userID").textContent =
        userID;

    document.getElementById("out-name").textContent =
        fullName;

    document.getElementById("out-birthdate").textContent =
        birthdate;

    document.getElementById("out-age").textContent =
        age;

    document.getElementById("out-number").textContent =
        number;

    document.getElementById("out-address").textContent =
        address;

    output.style.display = "block";

    output.scrollIntoView({
        behavior: "smooth"
    });
});

resetButton.addEventListener("click", function () {

    hideError();

    output.style.display = "none";

    ageInput.value = "";
});