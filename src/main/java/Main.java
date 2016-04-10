import spark.Spark;
import RouteHandlers.*;

import static spark.Spark.*;

public class Main {

    public static void main(String[] args) {

        Spark.staticFileLocation("/public/dist");
        /*
            Route Definitions
        */
        get("/category/:id", (req, res) -> Products.GetProductsByCategory(req, res));
        get("/products/:id", (req, res) -> Products.GetProduct(req, res));
        get("/products/sale", (req, res) -> Products.GetProductsOnSale(req, res));

    }

}
