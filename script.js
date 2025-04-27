const btn_generar_1 = document.getElementById("btn-generar-1");
const btn_generar_2 = document.getElementById("btn-generar-2");
const btn_generar_3 = document.getElementById("btn-generar-3");
const btn_restablecer = document.getElementById("restablecer");

let nombre = document.getElementById("name");
let raza = document.getElementById("raze");
let clase = document.getElementById("class");
let bio = document.getElementById("bio");

let fuerza = document.getElementById("fuerza");
let destreza = document.getElementById("destreza");
let constitucion = document.getElementById("constitucion");
let inteligencia = document.getElementById("inteligencia");
let sabiduria = document.getElementById("sabiduria");
let carisma = document.getElementById("carisma");

let tiradas = document.getElementById("tiradas");

/* FUNCIONALIDADES */
btn_restablecer.addEventListener("click", (e) => {
    fuerza.innerHTML = "";
    destreza.innerHTML = "";
    constitucion.innerHTML = "";
    inteligencia.innerHTML = "";
    sabiduria.innerHTML = "";
    carisma.innerHTML = "";
    tiradas.innerHTML = "";
});

/** PRIMER MÉTODO - Números Aleatorios
 *
 * El primer método genera aleatoriamente números del 0 al 7 y al valor le suma 8, dando como resultado la posibilidad de tener atributos del 8 al 15.
 * No ejecuta ningún otro procedimiento
 */
btn_generar_1.addEventListener("click", (e) => {
    e.preventDefault(); // Previene el refresco de la página

    fuerza.innerText = Math.round(Math.random() * 7) + 8;
    console.log("fuerza" + fuerza);

    destreza.innerText = Math.round(Math.random() * 7) + 8;
    console.log("destreza" + destreza);

    constitucion.innerText = Math.round(Math.random() * 7) + 8;
    console.log("constitucion" + constitucion);

    inteligencia.innerText = Math.round(Math.random() * 7) + 8;
    console.log("inteligencia" + inteligencia);

    sabiduria.innerText = Math.round(Math.random() * 7) + 8;
    console.log("sabiduria" + sabiduria);

    carisma.innerText = Math.round(Math.random() * 7) + 8;
    console.log("carisma" + carisma);

    tiradas.innerText = "Aleatorio";
});

/** SEGUNDO MÉTODO - Tiradas de Dados x 4
 *
 * Sigue las reglas de tiradas de dados de seis caras, donde el jugador tira cuatro veces el dado, y luego se anota la suma de los tres valores más altos en cada uno de los atributos del personaje.
 * Esta metodología se encuentra establecida en el Manual del Jugador en el Capítulo 1 Inciso 3 - "Determinar las Puntuaciones de Características" (Página 9).
 */
btn_generar_2.addEventListener("click", (e) => {
    e.preventDefault();
    let aux = [0, 0, 0, 0, 0, 0];

    fuerza.innerText = tirada();
    aux[0] = fuerza.textContent;
    console.log("fuerza" + fuerza);

    destreza.innerText = tirada();
    aux[1] = destreza.textContent;
    console.log("destreza" + destreza);

    constitucion.innerText = tirada();
    aux[2] = constitucion.textContent;
    console.log("constitucion" + constitucion);

    inteligencia.innerText = tirada();
    aux[3] = inteligencia.textContent;
    console.log("inteligencia" + inteligencia);

    sabiduria.innerText = tirada();
    aux[4] = sabiduria.textContent;
    console.log("sabiduria" + sabiduria);

    carisma.innerText = tirada();
    aux[5] = carisma.textContent;
    console.log("carisma" + carisma);

    tiradas.innerText = `[${aux[0]}, ${aux[1]}, ${aux[2]}, ${aux[3]}, ${aux[4]}, ${aux[5]}]`;
});

function tirada() {
    let tiradas = [
        Math.round(Math.random() * 5 + 1),
        Math.round(Math.random() * 5 + 1),
        Math.round(Math.random() * 5 + 1),
        Math.round(Math.random() * 5 + 1),
    ];
    console.log(tiradas);
    tiradas.sort((a, b) => {
        return b - a;
    });
    console.log(tiradas);
    let valor = tiradas[0] + tiradas[1] + tiradas[2];
    console.log(valor);
    return valor;
}

/** TERCER MÉTODO - 27 puntos (Aleatorio)
 *
 * Metodología alterna descrita en el Manual del Jugador, pero con la particularidad de realizarlo de forma aleatoria.
 * Implica repartir 27 puntos entre los atributos
 */
btn_generar_3.addEventListener("click", (e) => {
    e.preventDefault();
    let valores_array = valor_metodo_3();
    console.log(valores_array);
    fuerza.innerText = 7 + valores_array[0];
    console.log("fuerza " + fuerza.textContent);
    destreza.innerText = 7 + valores_array[1];
    console.log("destreza " + destreza.textContent);
    constitucion.innerText = 7 + valores_array[2];
    console.log("constitucion " + constitucion.textContent);
    inteligencia.innerText = 7 + valores_array[3];
    console.log("inteligencia " + inteligencia.textContent);
    sabiduria.innerText = 7 + valores_array[4];
    console.log("sabiduria " + sabiduria.textContent);
    carisma.innerText = 7 + valores_array[5];
    console.log("carisma " + carisma.textContent);

    tiradas.innerText = `[${valores_array[0]}, ${valores_array[1]}, ${valores_array[2]}, ${valores_array[3]}, ${valores_array[4]}, ${valores_array[5]}]`;
});

function valor_metodo_3() {
    let array_num, num;
    do {
        num = 0;
        array_num = [
            Math.round(Math.random() * 7 + 1),
            Math.round(Math.random() * 7 + 1),
            Math.round(Math.random() * 7 + 1),
            Math.round(Math.random() * 7 + 1),
            Math.round(Math.random() * 7 + 1),
            Math.round(Math.random() * 7 + 1),
        ];
        for (i = 0; i < 6; i++) num = num + array_num[i];
        console.log(num);
    } while (num != 27);
    return array_num;
}



/* GENERADOR DE HOJA DE PERSONAJES */

const generar_hoja_pj = document.getElementById("generar-hoja-pj");

const hoja_personaje = document.getElementById("contanier-bio-jugador");
let hoja_nombre = document.getElementById("hoja-nombre");
let hoja_clase = document.getElementById("hoja-clase");
let hoja_raza = document.getElementById("hoja-raza");
let hoja_bio = document.getElementById("hoja-bio");

let atributo_fuerza = document.getElementById("atributo-fuerza");
let atributo_destreza = document.getElementById("atributo-destreza");
let atributo_constitucion = document.getElementById("atributo-constitucion");
let atributo_inteligencia = document.getElementById("atributo-inteligencia");
let atributo_sabiduria = document.getElementById("atributo-sabiduria");
let atributo_carisma = document.getElementById("atributo-carisma");

generar_hoja_pj.addEventListener("click", (e) => {
    e.preventDefault();

    hoja_nombre.innerText = nombre.value;
    hoja_clase.innerText = clase.value;
    hoja_raza.innerText = raza.value;
    hoja_bio.innerText = bio.value;
    atributo_fuerza.innerText = fuerza.textContent;
    atributo_destreza.innerText = destreza.textContent;
    atributo_constitucion.innerText = constitucion.textContent;
    atributo_inteligencia.innerText = inteligencia.textContent;
    atributo_sabiduria.innerText = sabiduria.textContent;
    atributo_carisma.innerText = carisma.textContent;
});