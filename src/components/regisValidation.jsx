function Validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/


    if(values.nama === "") {
        error.nama = "Nama tidak boleh kosong"
    }
    else {
        error.nama = ""
    }

    if(values.dateOfBirth === "") {
        error.dateOfBirth = " Tanggal tidak boleh kosong"
    }
    else {
        error.dateOfBirth = ""
    }

    if(values.gender === "") {
        error.gender = "Jenis Kelamin tidak boleh kosong"
    }
    else {
        error.gender = ""
    }

    if(values.phoneNumber === "") {
        error.phoneNumber = "Nomor telephone tidak boleh kosong"
    }
    else {
        error.phoneNumber = ""
    }

    
    if(values.email === "") {
        error.email = "Email tidak boleh kosong"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Email tidak sama"
    } else {
        error.email = ""
    }

    if(values.password === "") {
        error.password ="Password tidak boleh kosong"
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "Password tidak sama"
    } else {
        error.password = ""
    }

    if(values.confirmPassword === "") {
        error.confirmPassword ="Konfirmasi Password tidak boleh kosong"
    }
    else if(password !== confirmPassword) {
        error.confirmPassword = "Password tidak sama"
    } else {
        error.confirmPassword = ""
    }
    return error;
}

export default Validation