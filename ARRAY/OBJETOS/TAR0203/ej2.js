/**
 * Array
 * Posiciones numericas no escritas con valores
 */
let posiciones = [
    "Portero", 
    "Defensa", 
    "Mediocampista", 
    "Delantero"   
];

/**
 * Objeto
 * Posiciones llamadas propiedades con valores
 */
let posicionesObjeto = {
  0: "Portero", 
  1: "Defensa", 
  2: "Mediocampista", 
  3: "Delantero"   
};

/**
 * Array con nombre 'jugadores'
 * Contiene objetos con propiedades y valores
 * [0]  => object => propiedades : valores
 * [1]  => object => propiedades : valores
 */
const jugadores = [
  {
    nombre: "Lionel Messi",
    equipo: "Paris Saint-Germain",
    liga: "Ligue 1",
    posicion: "Delantero",
    golesMarcados: 26,
    partidosJugados: 30,
    fechaNacimiento: "1987-06-24",
    nacionalidad: "Argentina",
    esInternacional: true,
    estadisticas: {
      asistencias: 17,
      faltasSufridas: 43,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 4,
        },
        {
          tipo: "roja",
          cantidad: 1,
        },
      ],
      minutosJugados: 2700,
    },
  },
  {
    nombre: "Cristiano Ronaldo",
    equipo: "Manchester United",
    liga: "Premier League",
    posicion: "Delantero",
    golesMarcados: 22,
    partidosJugados: 27,
    fechaNacimiento: new Date("1985-02-05"),
    nacionalidad: "Portugal",
    esInternacional: true,
    estadisticas: {
      asistencias: 15,
      faltasSufridas: 31,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 3,
        },
        {
          tipo: "roja",
          cantidad: 0,
        },
      ],
      minutosJugados: 2500,
    },
  },
  {
    nombre: "Robert Lewandowski",
    equipo: "Bayern Munich",
    liga: "Bundesliga",
    posicion: "Delantero",
    golesMarcados: 37,
    partidosJugados: 28,
    fechaNacimiento: new Date("1988-08-21"),
    nacionalidad: "Polonia",
    esInternacional: true,
    estadisticas: {
      asistencias: 12,
      faltasSufridas: 27,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 6,
        },
        {
          tipo: "roja",
          cantidad: 0,
        },
      ],
      minutosJugados: 2650,
    },
  },
  {
    nombre: "Kylian Mbappé",
    equipo: "Paris Saint-Germain",
    liga: "Ligue 1",
    posicion: "Delantero",
    golesMarcados: 19,
    partidosJugados: 28,
    fechaNacimiento: new Date("1998-12-20"),
    nacionalidad: "Francia",
    esInternacional: true,
    estadisticas: {
      asistencias: 14,
      faltasSufridas: 32,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 2,
        },
        {
          tipo: "roja",
          cantidad: 0,
        },
      ],
      minutosJugados: 2300,
    },
  },
  {
    nombre: "Neymar Jr.",
    equipo: "Paris Saint-Germain",
    liga: "Ligue 1",
    posicion: "Delantero",
    golesMarcados: 21,
    partidosJugados: 29,
    fechaNacimiento: new Date("1992-02-05"),
    nacionalidad: "Brasil",
    esInternacional: true,
    estadisticas: {
      asistencias: 17,
      faltasSufridas: 39,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 3,
        },
        {
          tipo: "roja",
          cantidad: 0,
        },
      ],
      minutosJugados: 2600,
    },
  },
  {
    nombre: "Erling Haaland",
    equipo: "Borussia Dortmund",
    liga: "Bundesliga",
    posicion: "Delantero",
    golesMarcados: 22,
    partidosJugados: 25,
    fechaNacimiento: new Date("2000-07-21"),
    nacionalidad: "Noruega",
    esInternacional: true,
    estadisticas: {
      asistencias: 10,
      faltasSufridas: 20,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 1,
        },
        {
          tipo: "roja",
          cantidad: 0,
        },
      ],
      minutosJugados: 2100,
    },
  },
  {
    nombre: "Kevin De Bruyne",
    equipo: "Manchester City",
    liga: "Premier League",
    posicion: "Mediocampista",
    golesMarcados: 10,
    partidosJugados: 28,
    fechaNacimiento: new Date("1991-06-28"),
    nacionalidad: "Belgica",
    esInternacional: true,
    estadisticas: {
      asistencias: 25,
      faltasSufridas: 20,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 3,
        },
        {
          tipo: "roja",
          cantidad: 0,
        },
      ],
      minutosJugados: 2400,
    },
  },
  {
    nombre: "Virgil van Dijk",
    equipo: "Liverpool",
    liga: "Premier League",
    posicion: "Defensa",
    golesMarcados: 2,
    partidosJugados: 26,
    fechaNacimiento: new Date("1991-07-08"),
    nacionalidad: "Holanda",
    esInternacional: true,
    estadisticas: {
      asistencias: 2,
      faltasSufridas: 20,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 4,
        },
        {
          tipo: "roja",
          cantidad: 1,
        },
      ],
      minutosJugados: 1900,
    },
  },
  {
    nombre: "Luis Alberto",
    equipo: "Lazio",
    liga: "Serie A",
    posicion: "Mediocampista",
    golesMarcados: 8,
    partidosJugados: 30,
    fechaNacimiento: new Date("1992-11-28"),
    nacionalidad: "España",
    esInternacional: false,
    estadisticas: {
      asistencias: 20,
      faltasSufridas: 20,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 5,
        },
        {
          tipo: "roja",
          cantidad: 0,
        },
      ],
      minutosJugados: 2200,
    },
  },
  {
    nombre: "Jadon Sancho",
    equipo: "Borussia Dortmund",
    liga: "Bundesliga",
    posicion: "Delantero",
    golesMarcados: 12,
    partidosJugados: 25,
    fechaNacimiento: new Date("2000-03-25"),
    nacionalidad: "Inglaterra",
    esInternacional: true,
    estadisticas: {
      asistencias: 20,
      faltasSufridas: 10,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 2,
        },
        {
          tipo: "roja",
          cantidad: 1,
        },
      ],
      minutosJugados: 1900,
    },
  },
  {
    nombre: "Mauro Icardi",
    equipo: "Paris Saint-Germain",
    liga: "Ligue 1",
    posicion: "Delantero",
    golesMarcados: 27,
    partidosJugados: 28,
    fechaNacimiento: new Date("1993-02-19"),
    nacionalidad: "Argentina",
    esInternacional: true,
    estadisticas: {
      asistencias: 15,
      faltasSufridas: 20,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 3,
        },
        {
          tipo: "roja",
          cantidad: 0,
        },
      ],
      minutosJugados: 2100,
    },
  },
  {
    nombre: "Raheem Sterling",
    equipo: "Manchester City",
    liga: "Premier League",
    posicion: "Delantero",
    golesMarcados: 20,
    partidosJugados: 30,
    fechaNacimiento: new Date("1994-12-08"),
    nacionalidad: "Inglaterra",
    esInternacional: true,
    estadisticas: {
      asistencias: 15,
      faltasSufridas: 15,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 4,
        },
        {
          tipo: "roja",
          cantidad: 0,
        },
      ],
      minutosJugados: 1700,
    },
  },
  {
    nombre: "Leroy Sane",
    equipo: "Bayern Munich",
    liga: "Bundesliga",
    posicion: "Delantero",
    golesMarcados: 15,
    partidosJugados: 25,
    fechaNacimiento: new Date("1996-01-11"),
    nacionalidad: "Alemania",
    esInternacional: true,
    estadisticas: {
      asistencias: 20,
      faltasSufridas: 10,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 2,
        },
        {
          tipo: "roja",
          cantidad: 1,
        },
      ],
      minutosJugados: 1700,
    },
  },
  {
    nombre: "Ciro Immobile",
    equipo: "Lazio",
    liga: "Serie A",
    posicion: "Delantero",
    golesMarcados: 30,
    partidosJugados: 28,
    fechaNacimiento: new Date("1990-02-20"),
    nacionalidad: "Italia",
    esInternacional: true,
    estadisticas: {
      asistencias: 10,
      faltasSufridas: 15,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 3,
        },
        {
          tipo: "roja",
          cantidad: 0,
        },
      ],
      minutosJugados: 2200,
    },
  },
  {
    nombre: "Houssem Aouar",
    equipo: "Olympique Lyon",
    liga: "Ligue 1",
    posicion: "Mediocampista",
    golesMarcados: 5,
    partidosJugados: 25,
    fechaNacimiento: new Date("1998-06-30"),
    nacionalidad: "Francia",
    esInternacional: false,
    estadisticas: {
      asistencias: 10,
      faltasSufridas: 15,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 2,
        },
        {
          tipo: "roja",
          cantidad: 0,
        },
      ],
      minutosJugados: 1700,
    },
  },
  {
    nombre: "Tanguy Ndombele",
    equipo: "Tottenham Hotspur",
    liga: "Premier League",
    posicion: "Mediocampista",
    golesMarcados: 8,
    partidosJugados: 25,
    fechaNacimiento: new Date("1996-12-28"),
    nacionalidad: "Francia",
    esInternacional: true,
    estadisticas: {
      asistencias: 15,
      faltasSufridas: 18,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 3,
        },
        {
          tipo: "roja",
          cantidad: 1,
        },
      ],
      minutosJugados: 1600,
    },
  },
  {
    nombre: "Gianluigi Donnarumma",
    equipo: "AC Milan",
    liga: "Serie A",
    posicion: "Portero",
    golesMarcados: 0,
    partidosJugados: 27,
    fechaNacimiento: new Date("1999-02-25"),
    nacionalidad: "Italia",
    esInternacional: true,
    estadisticas: {
      asistencias: 0,
      faltasSufridas: 5,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 1,
        },
        {
          tipo: "roja",
          cantidad: 0,
        },
      ],
      minutosJugados: 2700,
    },
  },
  {
    nombre: "Serge Gnabry",
    equipo: "Bayern Munich",
    liga: "Bundesliga",
    posicion: "Delantero",
    golesMarcados: 20,
    partidosJugados: 26,
    fechaNacimiento: new Date("1995-07-14"),
    nacionalidad: "Alemania",
    esInternacional: true,
    estadisticas: {
      asistencias: 10,
      faltasSufridas: 15,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 2,
        },
        {
          tipo: "roja",
          cantidad: 0,
        },
      ],
      minutosJugados: 1700,
    },
  },
  {
    nombre: "Thomas Muller",
    equipo: "Bayern Munich",
    liga: "Bundesliga",
    posicion: "Mediocampista",
    golesMarcados: 15,
    partidosJugados: 25,
    fechaNacimiento: new Date("1989-09-13"),
    nacionalidad: "Alemania",
    esInternacional: true,
    estadisticas: {
      asistencias: 20,
      faltasSufridas: 20,
      tarjetas: [
        {
          tipo: "amarilla",
          cantidad: 3,
        },
        {
          tipo: "roja",
          cantidad: 1,
        },
      ],
      minutosJugados: 1500,
    },
  },
];
