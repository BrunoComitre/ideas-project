const imgShuffler = require("imageshuffler");


// Encriptar
// imgShuffler.encryptImage("download.jpg", "dfa91f82b161fb88f001ef7e8a96082daa45da43a67ac6322fd8ad65ba85ba58");


// Desciptar
imgShuffler.decryptImage("download_enc.jpg", "dfa91f82b161fb88f001ef7e8a96082daa45da43a67ac6322fd8ad65ba85ba58", "target_file.jpg");


https://github.com/ahgsql/ImageShuffler/blob/main/src/index.js