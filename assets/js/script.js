const reciboUrlId = (() => {
    const inyectaDato = (url, id) => {
        document.querySelector(`#${id}`).setAttribute("src", url);
    };
    return (url, id) => inyectaDato(url, id);
})();


class Multimedia {
    constructor(url) {
        let _url = url;

        this.getUrl = () => {
            return _url;
        };
    }
    get url() {
        return this.getUrl();
    }
    setInicio(_hola) {
        return "Este método es para realizar un cambio en la URL del video";
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        let _id = id;

        this.getId = () => {
            return _id;
        };
    }
    get id() {
        return this.getId();
    }
    playMultimedia() {
        reciboUrlId(this.url, this.id);
    }
    setInicio(url, id, tiempo) {
        document.querySelector(`#${id}`).setAttribute("src", `${url}?start=${tiempo}`)
    }
}


let musica = new Reproductor("https://www.youtube.com/watch?v=srpCmUfttqk", "musica");
let pelicula = new Reproductor("https://www.youtube.com/embed/0fUCuvNlOCg", "peliculas");
let serie = new Reproductor("https://www.youtube.com/embed/zmgYlYw7Uwk", "series");

musica.playMultimedia();
//pelicula.playMultimedia();
serie.playMultimedia();

pelicula.setInicio("https://www.youtube.com/embed/0fUCuvNlOCg", "peliculas", "70");

