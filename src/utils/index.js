class Movie {
    constructor() {
        this.object = {
            movie: [],
            actor: [],
            director: [],
        };
    }

    // now to make a method that adds title and actor to a variable
    add(argType, args) {
        // use switch to manipulate input
        switch (argType) {
            case "movie":
                for (let i = 0; i < args.length; i++) {
                    this.object.movie.push(args[i]);
                }
                break;

            case "actors":
                for (let i = 0; i < args.length; i++) {
                    this.object.actor.push(args[i]);
                }
                break;

            case "directors":
                for (let i = 0; i < args.length; i++) {
                    this.object.director.push(args[i]);
                }
                break;

            default:
                console.log("Nothing added, [msg from index.js file]");
                break;
        }
    }
}

module.exports = Movie;
