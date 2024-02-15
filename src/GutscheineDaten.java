import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class GutscheineDaten {
    private String gutscheincode;

    public GutscheineDaten() throws IOException {

        File file = new File("C:\\Users\\dadzi\\Documents\\PAR GmbH\\GutscheineDaten.txt");
        List<String> remainingLines = new ArrayList<>();



        try (BufferedReader br = new BufferedReader(new FileReader(file))) {
            gutscheincode = br.readLine();
            String line;
            // Lesen Sie den Rest der Linien und speichern Sie sie in remainingLines
            while ((line = br.readLine()) != null) {
                remainingLines.add(line);
            }
            System.out.println("Datei gelesen");
        }
        //Prüft ob es gutscheine gibt
        if (gutscheincode==null){
            System.out.println("Keine Gutscheine mehr");
        }

        // Jetzt überschreiben Sie die Datei ohne den ersten Gutscheincode
        try (PrintWriter pw = new PrintWriter(file)) {
            for (String line : remainingLines) {
                pw.println(line); // Schreiben Sie jede verbleibende Linie zurück in die Datei
            }
        }
    }

    @Override
    public String toString() {
        return "Gutscheincode" + " " +" ' " + gutscheincode + " ' " + " " + "wurde gelöscht." ;

    }
}