module.exports =  {
    secret: process.env.NODE_ENV === "production" ? process.env.SECRET : "2OD8HB479320IJFN39U97H47GF4872874G47B4",
    api: process.env.NODE_ENV === "production" ? "https://api.compreaki.com" : "http://localhost:3000",
    loja: process.env.NODE_ENV === "production" ? "https://compreaki.com" : "http://localhost:3000"
};