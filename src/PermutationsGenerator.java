import java.util.ArrayList;
import java.util.List;

public class PermutationsGenerator {

    public static void main(String[] args) {
        String s = "";
        List<String> permutations = generatePermutations(s);
        for (String perm : permutations) {
            System.out.println(perm);
        }
    }

    public static List<String> generatePermutations(String s) {
        List<String> result = new ArrayList<>();
        permuteHelper("", s, result);
        return result;
    }

    private static void permuteHelper(String prefix, String remainder, List<String> result) {
        if (remainder.length() == 0) {
            result.add(prefix);
        } else {
            for (int i = 0; i < remainder.length(); i++) {
                // Neuer Prefix wird um das aktuelle Zeichen erweitert
                String newPrefix = prefix + remainder.charAt(i);
                // Erstelle einen neuen Reststring ohne das aktuelle Zeichen
                String newRemainder = remainder.substring(0, i) + remainder.substring(i + 1);
                permuteHelper(newPrefix, newRemainder, result);
            }
        }
    }
}
