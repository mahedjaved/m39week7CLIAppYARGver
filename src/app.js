// Store optional data on movies.
// Console log user input at app termination.
const yargs = require("yargs");
const Movie = require("./utils");
const parseArgs = require("minimist");

const NetflixCLI = (cArgs) => {
    newNetflixCLIapp = new Movie();

    if (typeof cArgs.movie_title !== "undefined") {
        newNetflixCLIapp.add("movie", cArgs.movie_title);
    }

    if (typeof cArgs.actors !== "undefined") {
        newNetflixCLIapp.add("actors", cArgs.actors);
    }

    if (typeof cArgs.directors !== "undefined") {
        newNetflixCLIapp.add("directors", cArgs.directors);
    }

    console.log(`The movies added are : ${newNetflixCLIapp.object.movie}`);
    console.log(
        `The directors added are : ${newNetflixCLIapp.object.director}`
    );
    console.log(`The actors added are : ${newNetflixCLIapp.object.actor}`);
};

NetflixCLI(yargs.argv);
