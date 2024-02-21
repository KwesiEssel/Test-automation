import java.io.*;

public class Wortsammlung {

    private String filePath = "C:\\Users\\dadzi\\Documents\\PAR GmbH\\Wortsammlung.txt"; // Beispiel-Pfad

    public Wortsammlung() throws IOException {
        readFile();
    }

    private void readFile() throws IOException {
        File file = new File(filePath);
        BufferedReader reader = null;

        try {
            reader = new BufferedReader(new FileReader(file));
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } finally {
            if (reader != null) {
                reader.close(); // Sicherstellen, dass der Reader auch bei einem Fehler geschlossen wird
            }
        }
    }

    /* @Override
    public String toString() {
        return "Ordner:     " + filePath;
    } */
}
