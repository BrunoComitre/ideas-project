const path = require("path")
const Jimp = require('jimp');


// Gerando um Rand Alá Pytohn
// function getRandomArbitrary() {
//     return Math.floor(Math.random() * 256);
// }

// async function encryptImage(file: string, key: string){
//     let imageArrray =[];
//     let width;
//     let height;
//     let image = await Jimp.read(file)

// }

// function criptography_image(image, altura, largura, canais, operacao) {
//     const XOR = a ^ b
//     const ENC = []
//     const PWD = []

//     let range = n => Array.from(Array(n).keys())

//     for (let y in range(altura)){
//         for (let x in range(largura)){
//             for (let z in range(canais)){
//                 const mini_chave = getRandomArbitrary()
//                 PWD.includes(mini_chave)
//                 ENC.includes(XOR[operacao](Number(image[y][x][z]), mini_chave))
//             }
//         }
//     }

//     return ENC
// }





async function criptography_image(image, operacao, file: string, key: string) {
    const XOR = a ^ b
    const ENC = []
    const PWD = []
    let imageArrray = [];
    let largura;
    let altura;
    let canais;
    let imagem = await Jimp.read(file)

    largura = image.bitmap.width;
    altura = image.bitmap.height;
    canais = image.fade;


    let range = n => Array.from(Array(n).keys())

    for (let y in range(altura)) {
        for (let x in range(largura)) {
            for (let z in range(canais)) {
                let mini_chave = Math.floor(Math.random() * 256);
                PWD.join(mini_chave)
                PWD.includes(mini_chave)
                ENC.includes(XOR[operacao](Number(image[y][x][z]), mini_chave))
            }
        }
    }

    return ENC
}

const TEST =[]

let mini_chave = Math.floor(Math.random() * 256);
PWD.join(mini_chave)