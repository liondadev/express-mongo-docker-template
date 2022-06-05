module.exports = {
    PORT: process.env.PORT || 3001,

    MONGO_USERNAME: process.env.MONGO_USERNAME,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD,
    MONGO_HOST: process.env.MONGO_HOST || "mongo", // We can use mongo becuase docker-compose assigns DNS to the containers.
    MONGO_PORT: process.env.MONGO_PORT || 27017,
}
