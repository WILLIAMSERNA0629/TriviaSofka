const level1 = [
    {
        "id": "1",
        "pregunta": "¿Dónde está Transilvania?",
        "respuestas": [
            {
                "opcion": "Rumanía",
                "validacion": true
            },
            {
                "opcion": "Moldavia",
                "validacion": false
            },
            {
                "opcion": "Hungría",
                "validacion": false
            },
            {
                "opcion": "Serbia",
                "validacion": false
            }
        ]
    },
    {
        "id": "2",
        "pregunta": "¿Cuál es el río más largo del mundo?",
        "respuestas": [
            {
                "opcion": "Nilo",
                "validacion": true
            },
            {
                "opcion": "Amazonas",
                "validacion": false
            },
            {
                "opcion": "Misisipi",
                "validacion": false
            },
            {
                "opcion": "Congue",
                "validacion": false
            }
        ]
    },
    {
        "id": "3",
        "pregunta": "¿Cuál es el país con menos habitantes del mundo?",
        "respuestas": [
            {
                "opcion": "Perú",
                "validacion": false
            },
            {
                "opcion": "La Ciudad del Vaticano",
                "validacion": true
            },
            {
                "opcion": "Mónaco",
                "validacion": false
            },
            {
                "opcion": "Maldivas",
                "validacion": false
            }
        ]
    },
    {
        "id": "4",
        "pregunta": "¿En qué año cayó el muro de Berlín?",
        "respuestas": [
            {
                "opcion": "1989",
                "validacion": true
            },
            {
                "opcion": "1987",
                "validacion": false
            },
            {
                "opcion": "1988",
                "validacion": false
            },
            {
                "opcion": "1990",
                "validacion": false
            }
        ]
    },
    {
        "id": "5",
        "pregunta": "¿Cuántos años duró la Primera Guerra Mundial?",
        "respuestas": [
            {
                "opcion": "3 años",
                "validacion": false
            },
            {
                "opcion": "5 años",
                "validacion": false
            },
            {
                "opcion": "4 años",
                "validacion": true
            },
            {
                "opcion": "2 años",
                "validacion": false
            }
        ]
    }
]

const users = document.getElementById("users").value;
const level = document.getElementById("level");
const points = document.getElementById("points");
const res1 = document.getElementById("resp1");
const res2 = document.getElementById("resp2");
const res3 = document.getElementById("resp3");
const res4 = document.getElementById("resp4");
const respinput1 = document.getElementById("res1");
const respinput2 = document.getElementById("res2");
const respinput3 = document.getElementById("res3");
const respinput4 = document.getElementById("res4");
const question = document.getElementById("pregunta");

const optionSelectec = document.getElementsByName("fav_language")

const aumentarPoint = () => {
    var points = document.getElementById("points").value;
    var puntos = points + 1;
    points.innerHTML = puntos;
}

const largoArreglo = Math.round(Math.random()*(level1.length-1))
let preguntaAleatoria = level1[largoArreglo]

const verradiovalue = () => {
    for(let i=0;i<optionSelectec.length;i++){
        if(optionSelectec[i].checked==true){
          const radiovalue= optionSelectec[i].value;
          const objetoSelected= preguntaAleatoria.respuestas.filter(e=>e.opcion==radiovalue)
          if(objetoSelected[0].validacion==true){
              alert("respueta correcta")
          }else {
              alert("respuesta incorrecta")
          }
          preguntaAleatoria = level1[largoArreglo]
        }
    }
}

question.innerHTML = preguntaAleatoria.pregunta
res1.innerHTML = preguntaAleatoria.respuestas[0].opcion
res2.innerHTML = preguntaAleatoria.respuestas[1].opcion
res3.innerHTML = preguntaAleatoria.respuestas[2].opcion
res4.innerHTML = preguntaAleatoria.respuestas[3].opcion
respinput4.value = preguntaAleatoria.respuestas[3].opcion
respinput3.value = preguntaAleatoria.respuestas[2].opcion
respinput2.value = preguntaAleatoria.respuestas[1].opcion
respinput1.value = preguntaAleatoria.respuestas[0].opcion