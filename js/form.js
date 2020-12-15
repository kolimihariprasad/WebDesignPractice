const text = document.querySelector('#text');
        const textError = document.querySelector('.text-error');
        text.addEventListener('input', function() {
            let nameReg = RegExp('^[A-Z]{1}[a-z]{2,}$')
            if(nameReg.test(text.value)) {
                textError.textContent = ""
            } else textError.textContent = "Name is incorrect";
        })
        const pwd = document.querySelector('#pwd');
        const pwdError = document.querySelector('.pwd-error');
        console.log(pwd.value)
        pwd.addEventListener('input', function() {
            let pwdReg = RegExp('^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$')
            if(pwdReg.test(pwd.value)) {
                pwdError.textContent = ""
            } else pwdError.textContent = "Password is incorrect"
        })
        const mail = document.querySelector('#email');
        const mailError = document.querySelector('.email-error');
        email.addEventListener('input', function() {
            let mailReg = RegExp('^[a-zA-Z0-9]+([._+-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.][a-zA-Z]{2,3}){1,2}$')
            if(mailReg.test(mail.value)) {
                mailError.textContent = ""
            } else mailError.textContent = "mail format is incorrect"
        })
        const url = document.querySelector('#url');
        const urlError = document.querySelector('.url-error');
        url.addEventListener('input', function() {
            let urlReg = RegExp('^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$')
            if(urlReg.test(url.value)) {
                urlError.textContent = ""
            } else urlError.textContent = "url format is incorrect"
        })

        const num = document.querySelector('#number');
        const numError = document.querySelector('.number-error');
        number.addEventListener('input', function() {
            let numReg = RegExp('^[1-9]+[0-9]?')
            if(numReg.test(num.value)) {
                numError.textContent = ""
            } else numError.textContent = "Number format is incorrect"
        })

        const telnum = document.querySelector('#tel');
        const telnumError = document.querySelector('.tel-error');
        tel.addEventListener('input', function() {
            let telnumReg = RegExp('^[+]?([0-9]{2})?((\s)|[-])?[6-9]{1}[0-9]{9}$')
            if(telnumReg.test(telnum.value)) {
                telnumError.textContent = ""
            } else telnumError.textContent = "Mobile format is incorrect"
        })

        const salary = document.querySelector('#salary');
        const output = document.querySelector('.salary-output');
        output.textContent = salary.value;
        salary.addEventListener('input', function() {
            output.textContent = salary.value
        });