const users = []

const captura = () => {
    try {
        
        const email = document.getElementById("inputEmail").value
        const contraseña = document.getElementById("inputContraseña").value
        const direccion = document.getElementById("inputDireccion").value
        const direccion2 = document.getElementById("inputDireccion2").value
        const ciudad = document.getElementById("inputCiudad").value
        const departamento = document.getElementById("inputDepartamento").value
        const zip = document.getElementById("inputZip").value
        const cedula = +document.getElementById("inputCedula").value
    
    
        switch (true) {
            case (email === ""):
                alert("Ingrese el email")
                throw new Error("INVALID_FIELD_EMAIL")
            case (contraseña === ""):
                alert("Ingrese el contraseña")
                throw new Error("INVALID_FIELD_PASSWORD")
            case (users.length !== 0 && (cedula === "" || users.some(user => user.cedula === cedula))):
                alert("Ingrese una cedula valida")
                throw new Error("INVALID_FIELD_ID")
            default:
                break;
        }
    
        const user = {
            email: email,
            contraseña: contraseña,
            direccion: direccion,
            direccion2: direccion2,
            ciudad: ciudad,
            departamento: departamento,
            zip: zip,
            cedula: cedula,
        }
    
        users.push(user)

        console.log(users);
    
    
        console.log(email + " " + contraseña + " " + direccion + " " + direccion2 + " " + ciudad + " " + departamento + " " + zip + " " + cedula);
    
        let tbody = document.getElementById("usuarios")
    
        listar()
    } catch (error) {
        console.error(error);
    }

    /* tbody.innerHTML = "<tr><td>" + email + "</td><td>" + contraseña + "</td><td>" + direccion + "</td><td>" + direccion2 + "</td><td>" + ciudad + "</td><td>" + departamento + "</td><td>" + zip + "</td><td>" + cedula + "</td><td>"; */
}

let tabla = [
    { email: "Secasadiego@gmail.com", contraseña: "Seca123456", direcccion: "Calle 14", direccion2: "Piso 2", ciudad: "Barranquilla", departamento: "Atlantico", zip: "145236", cedula: "12345678" },
    { email: "Elo0902@gmail.com", contraseña: "E123456", direcccion: "Calle 34", direccion2: "Apartemento 101", ciudad: "Santa Marta", departamento: "Magdalena", zip: "654321", cedula: "87654321" },
    { email: "CamiloP@gmail.com", contraseña: "Peña123456", direcccion: "Calle 11", direccion2: "Local 123", ciudad: "Medellin", departamento: "Antioquia", zip: "475869", cedula: "11223344" }
]

const listarEstatica = () => {
    let tbody = document.getElementById("usuarios")
    let tablallena = "";
    for (let i = 0; i < tabla.length; i++) {
        tablallena += "<tr><td>" + tabla[i].email + "</td><td>" + tabla[i].contraseña + "</td><td>" + tabla[i].direcccion + "</td><td>" + tabla[i].direccion2 + "</td><td>" + tabla[i].ciudad + "</td><td>" + tabla[i].departamento + "</td><td>" + tabla[i].zip + "</td><td>" + tabla[i].cedula + "</td><td>";
    }
    tbody.innerHTML = tablallena;
}

const listar = () => {
    let tbody = document.getElementById("usuarios")
    let tablallena = "";
    for (let i = 0; i < users.length; i++) {
        tablallena += "<tr><td>" + users[i].email + "</td><td>" + users[i].contraseña + "</td><td>" + users[i].direcccion + "</td><td>" + users[i].direccion2 + "</td><td>" + users[i].ciudad + "</td><td>" + users[i].departamento + "</td><td>" + users[i].zip + "</td><td>" + users[i].cedula + "</td><td>";
    }
    tbody.innerHTML = tablallena;
}