import static spark.Spark.*;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world");
        get("/hello", (req, res) -> "Hello World");
    }
}
