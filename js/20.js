const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo Cancion con el ID: ${id}`)
    },
    pausar: function () {
        console.log('Pausando...')
    },
    crearPlaylist: function (nombre) {
        console.log(`Creando la Playlist: ${nombre}`)
    },
    reproducirPlaylist: function (nombre) {
        console.log(`Reproduciendo Playlist: ${nombre}`)
    },

}

reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la Cancion: ${id}`)
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');
