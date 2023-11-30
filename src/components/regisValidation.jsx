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

    if(values.tgl_lahir === "") {
        error.tgl_lahir = " Tanggal tidak boleh kosong"
    }
    else {
        error.tgl_lahir = ""
    }

    if(values.jenis_kelamin === "") {
        error.jenis_kelamin = "Jenis Kelamin tidak boleh kosong"
    }
    else {
        error.jenis_kelamin = ""
    }

    if(values.no_tlp === "") {
        error.no_tlp = "Nomor telephone tidak boleh kosong"
    }
    else {
        error.no_tlp = ""
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

    if(values.confirmasiPassword === "") {
        error.confirmasiPassword ="Konfirmasi Password tidak boleh kosong"
    }
    else if(password !== confirmasiPassword) {
        error.confirmasiPassword = "Password tidak sama"
    } else {
        error.confirmasiPassword = ""
    }
    return error;
}

export default Validation