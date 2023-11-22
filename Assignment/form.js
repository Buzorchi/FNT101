document.getElementById("handleForm").addEventListener("submit", myFunction);
const handleFormEl = document.getElementById("handleForm");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const countryEl = document.getElementById ("country")
const fullNameEl = document.getElementById("fullName")


        function myFunction(e){
            e.preventDefault();
            const emailValue = emailEl.value;
            const passwordValue = passwordEl.value;
            const countryValue = countryEl.value
            const fullNameValue = fullNameEl.value
        
            if (emailValue && passwordValue && countryValue && fullNameValue) {
                console.log("Email:", emailValue);
                console.log("Password:", passwordValue);
                console.log("Country:", countryValue);
                console.log ("Full Name:", fullNameValue)
            } else {
                alert("Please fill  all fields");
            }
        }
        