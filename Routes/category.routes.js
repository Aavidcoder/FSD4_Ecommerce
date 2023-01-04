
const categoryControllers = require("../Controllers/category.controllers");


module.exports = (app) => {

    // create a new category
    app.post("/ecom/api/v1/category",categoryControllers.create);

    app.get("/ecom/api/v1/category",categoryControllers.getAll);

    app.get("/ecom/api/v1/category/:id",categoryControllers.getOne);

    app.put("/ecom/api/v1/category/:id",categoryControllers.update);

    app.delete("/ecom/api/v1/category/:id",categoryControllers.delete);


}