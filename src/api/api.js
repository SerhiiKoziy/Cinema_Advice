import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org';
const apiKey = '0d6f90b4158a5319d8b3137e38160e8e';
const listOfGenresApi = 'https://api.themoviedb.org/3/genre/movie/list?api_key=0d6f90b4158a5319d8b3137e38160e8e&language=en-US';
const urlBestFilms_Genres = 'https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&api_key=0d6f90b4158a5319d8b3137e38160e8e';
//const urlActorsForFilm = 'https://api.themoviedb.org/3/movie/{idFilm}/casts?api_key=0d6f90b4158a5319d8b3137e38160e8e';
const urlActorsForFilm = 'https://api.themoviedb.org/3/movie/343824/casts?api_key=0d6f90b4158a5319d8b3137e38160e8e';



const getBestFilmsByYear = year => {
    const urlBestFilms_Year = `${baseUrl}/3/discover/movie?primary_release_year=2017&sort_by=popularity.asc&api_key=${apiKey}&callback=json`;
    //const urlBestFilms_Year = `https://api.themoviedb.org/3/search/movie?api_key=0d6f90b4158a5319d8b3137e38160e8e&language=en-US&query=A&page=1&sort_by=revenue.desc&callback=json`;
    const urlBestFilms_Year2 = `https://api.themoviedb.org/3/movie/1900/credits?api_key=0d6f90b4158a5319d8b3137e38160e8e&callback=json`;
    // https://api.themoviedb.org/3/discover/movie?primary_release_year=2017&sort_by=popularity.asc&api_key=0d6f90b4158a5319d8b3137e38160e8e
    //const urlBestFilms_Year = `https://api.themoviedb.org/3/discover/movie?with_genres=28&primary_release_year=${year}&sort_by=vote_average.desc&api_key=${apiKey}`;
    //const urlBestFilms_Year = `https://api.themoviedb.org/3/discover/movie?with_genres=35&with_cast=500&sort_by=popularity.asc&api_key=${apiKey}`;
    const headers = new Headers({
      'Content-Type': 'application/json;charset=utf-8'
    });

    axios.get(urlBestFilms_Year, headers)
      .then(function (data) {
        console.log('1122222 urlBestFilms_Year', data.request._response);
        console.log('33333 urlBestFilms_Year');
        console.log('11111 urlBestFilms_Year',  JSON.parse(`${data.request._response}`))
        return {
          results: ''
        }
      //dispatch(receiveLogout(data));
    })
    .catch(function (error) {
      console.log(error);
    });

    // return fetch(urlBestFilms_Year, {
    //     method: "GET",
    //     headers: headers
    // }).then(resolve => {
    //     console.log('11111 urlBestFilms_Year', resolve)
    //     //console.log('33333 urlBestFilms_Year', JSON.parse(resolve))
    //     //return JSON.parse(resolve._bodyInit);
    //     return {};
    // });
};

const getBestFilmsByGenres = genreId => {
    const urlBestFilms_Genres = `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&sort_by=vote_average.desc&vote_count.gte=10&api_key=${apiKey}`;
    const headers = new Headers({});

    return fetch(urlBestFilms_Genres, {
        method: "GET",
        headers: headers
    }).then(resolve => {
        return JSON.parse(resolve._bodyInit);
    });
};
const getAllGenres = () => {
    const urlAllGenres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;
    const headers = new Headers({});

    return fetch(urlAllGenres, {
        method: "GET",
        headers: headers
    }).then(resolve => {
        return JSON.parse(resolve._bodyInit);
    });
};

const ApiData = {
    getBestFilmsByYear: async year => {

        try {

            let fromApi = await getBestFilmsByYear(year);
            console.log('222222 fromApi ', fromApi)
            //const normalized = await getMixed(fromApi);
            return fromApi;
        } catch (e) {
            console.log(e.message);
        }
    },
    getBestFilmsByGenres: async genreId => {
        try {
            let fromApi = await getBestFilmsByGenres(genreId);
            //const normalized = await getMixed(fromApi);
            return fromApi;
        } catch (e) {
            console.log(e.message);
        }
    },
    getBestActorsById: async genreId => {
        try {
            let fromApi = await getBestActorsById(genreId);
            //const normalized = await getMixed(fromApi);
            return fromApi;
        } catch (e) {
            console.log(e.message);
        }
    },
    getAllGenres: async () => {
        try {
            let fromApi = await getAllGenres();
            //const normalized = await getMixed(fromApi);
            return fromApi;
        } catch (e) {
            console.log(e.message);
        }
    },

};
export default ApiData;


