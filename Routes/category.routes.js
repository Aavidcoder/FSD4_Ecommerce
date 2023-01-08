
const categoryControllers = require("../Controllers/category.controllers");


module.exports = (app) => {

    // create a new category
    app.post("/ecomm/api/v1/category",categoryControllers.create);

    app.get("/ecomm/api/v1/category",categoryControllers.getAll);

    app.get("/ecomm/api/v1/category/:id",categoryControllers.getOne);

    app.put("/ecomm/api/v1/category/:id",categoryControllers.update);

    app.delete("/ecomm/api/v1/category/:id",categoryControllers.delete);


}