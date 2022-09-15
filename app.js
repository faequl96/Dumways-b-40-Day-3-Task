let nama = document.querySelector('.nama');
let email = document.querySelector('.email');
let phone = document.querySelector('.phone');
let subject = document.querySelector('.subject');
let message = document.querySelector('.message');


nama.addEventListener('click', function() {
    
    nama.classList.add('pin');
    nama.removeAttribute('placeholder');
    if(email.classList.contains('pin') && email.value == "") {
        email.placeholder = '* Email wajib diinput';
        email.style.border = '2px solid red';
    }
    if(phone.classList.contains('pin') && phone.value == "") {
        phone.placeholder = '* Phone wajib diinput';
        phone.style.border = '2px solid red';
    }
    if(message.classList.contains('pin') && message.value == "") {
        message.placeholder = '* Message wajib diinput';
        message.style.border = '2px solid red';
    }
    if(subject.classList.contains('pin')) {
        subject.style.border = '2px solid red';
    }
    nama.addEventListener('input', function() {
        if(nama.value == "") {
            nama.style.border = '2px solid red';
        } else{
            nama.style.border = '2px solid rgba(0,0,0,0)';
            nama.classList.remove('pin');
        }
    })
})


email.addEventListener('click', function() {
    
    email.classList.add('pin');
    email.removeAttribute('placeholder');
    if(nama.classList.contains('pin') && nama.value == "") {
        nama.placeholder = '* Nama wajib diinput';
        nama.style.border = '2px solid red';
    }
    if(phone.classList.contains('pin') && phone.value == "") {
        phone.placeholder = '* Phone wajib diinput';
        phone.style.border = '2px solid red';
    }
    if(message.classList.contains('pin') && message.value == "") {
        message.placeholder = '* Message wajib diinput';
        message.style.border = '2px solid red';
    }
    if(subject.classList.contains('pin')) {
        subject.style.border = '2px solid red';
    }
    email.addEventListener('input', function() {
        if(email.value == "") {
            email.style.border = '2px solid red';
        } else{
            email.style.border = '2px solid rgba(0,0,0,0)';
            email.classList.remove('pin');
        }
    })
})


phone.addEventListener('click', function() {
    
    phone.classList.add('pin');
    phone.removeAttribute('placeholder');
    if(nama.classList.contains('pin') && nama.value == "") {
        nama.placeholder = '* Nama wajib diinput';
        nama.style.border = '2px solid red';
    }
    if(email.classList.contains('pin') && email.value == "") {
        email.placeholder = '* Email wajib diinput';
        email.style.border = '2px solid red';
    }
    if(message.classList.contains('pin') && message.value == "") {
        message.placeholder = '* Message wajib diinput';
        message.style.border = '2px solid red';
    }
    if(subject.classList.contains('pin')) {
        subject.style.border = '2px solid red';
    }
    phone.addEventListener('input', function() {
        if(phone.value == "") {
            phone.style.border = '2px solid red';
        } else{
            phone.style.border = '2px solid rgba(0,0,0,0)';
            phone.classList.remove('pin');
        }
    })
})


subject.addEventListener('click', function() {
    if(nama.classList.contains('pin') && nama.value == "") {
        nama.placeholder = '* Nama wajib diinput';
        nama.style.border = '2px solid red';
    }
    if(phone.classList.contains('pin') && phone.value == "") {
        phone.placeholder = '* Phone wajib diinput';
        phone.style.border = '2px solid red';
    }
    if(email.classList.contains('pin') && email.value == "") {
        email.placeholder = '* Email wajib diinput';
        email.style.border = '2px solid red';
    }
    if(message.classList.contains('pin') && message.value == "") {
        message.placeholder = '* Message wajib diinput';
        message.style.border = '2px solid red';
    }
    if(subject.value == "") {
        subject.classList.add('pin');
    }
    
    subject.addEventListener('input', function() {
        if(subject.value == "") {
            subject.style.border = '2px solid red';
        } else{
            subject.style.border = '2px solid rgba(0,0,0,0)'
            subject.classList.remove('pin');
        }
    })
})


message.addEventListener('click', function() {
    
    message.classList.add('pin');
    message.removeAttribute('placeholder');
    if(nama.classList.contains('pin') && nama.value == "") {
        nama.placeholder = '* Nama wajib diinput';
        nama.style.border = '2px solid red';
    }
    if(phone.classList.contains('pin') && phone.value == "") {
        phone.placeholder = '* Phone wajib diinput';
        phone.style.border = '2px solid red';
    }
    if(email.classList.contains('pin') && email.value == "") {
        email.placeholder = '* Email wajib diinput';
        email.style.border = '2px solid red';
    }
    if(subject.classList.contains('pin') && subject.value == "") {
        subject.style.border = '2px solid red';
    }
    message.addEventListener('input', function() {
        if(message.value == "") {
            message.style.border = '2px solid red';
        } else{
            message.style.border = '2px solid rgba(0,0,0,0)';
            message.classList.remove('pin');
        }
    })
})





let button = document.querySelector('.submit');

button.addEventListener('click', function() {
    let nama = document.querySelector('.nama');
    let email = document.querySelector('.email');
    let phone = document.querySelector('.phone');
    let subject = document.querySelector('.subject');
    let message = document.querySelector('.message');

    // if(nama.value == "") {
    //     alert('nama wajib diisi')
    // } else if(email.value == "") {
    //     alert('email wajib diisi')
    // } else if(phone.value == "") {
    //     alert('phone wajib diisi')
    // } else if(subject.value == "") {
    //     alert('subject wajib diisi')
    // } else if(message.value == "") {
    //     alert('message wajib diisi')
    // }

    function ObjData() {
        this.nama = nama.value;
        this.email = email.value;
        this.phone = phone.value;
        this.subject = subject.value;
        this.message = message.value;
    }

    if(nama.value != "" && email.value != "" && phone.value != "" && subject.value != "" && message.value != "") {
        let tangkapData = new ObjData();
        console.log(tangkapData);

        let a = document.createElement('a');
        a.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${email.value}&su=${subject.value}&body=Halo, saya ${nama.value}, ${message.value}, silahkan hubungi nomor ${phone.value}`;
        a.target = '_blank'
        a.click()
    } else {
        alert('Semua field wajib diisi');
    }

    // let emailReceiver = 'Javascript@js.com'
    
})