import axios from 'axios'

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
            accept: 'application/json',
            Authorization:
             'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlY2UwYWE2ZDA0ODg3NDJhNjM0NTkyNTUxOTE3MTA2MSIsIm5iZiI6MTczMzc2MzY1OC4yMzYsInN1YiI6IjY3NTcyMjRhMTliMDRlNzE1NDQ3Mjk3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cidVTBQi_eqkDkahd5Pa3ZqN0DzYH8aI2CHF7qBxmq4'
    },
});

export default  instance;