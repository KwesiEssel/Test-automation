import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        try {
            GutscheineDaten gutscheineDaten = new GutscheineDaten();
            System.out.println(gutscheineDaten);
        } catch (IOException e){
            e.printStackTrace();
        }
    }
}