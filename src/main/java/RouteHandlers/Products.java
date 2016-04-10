package RouteHandlers;

public class Products {


    public static String GetProductsByCategory(spark.Request req, spark.Response res) {
        // @TODO Verify 'id' parameter is valid before calling getProductsByCategory()
        return getProductsByCategory(req.params("id"));
    }

    public static String GetProduct(spark.Request req, spark.Response res) {
        // @TODO Verify 'id' parameter is valid before calling getProduct()
        return getProduct(req.params("id"));
    }

    public static String GetProductsOnSale(spark.Request req, spark.Response res) {
        return getProductsOnSale();
    }

    // Returns an array of products in a given category
    private static String getProductsByCategory(String id) {
        return ("Products in category " + id);
    }

    // Returns product details for the given product id
    private static String getProduct(String id) {
        // @TODO Needs implementation
        return ("Product Details for item " + id);
    }

    // Returns an array of products on sale
    private static String getProductsOnSale() {
        return ("Sale Products");
    }


}
