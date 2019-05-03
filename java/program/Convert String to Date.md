  import java.time.LocalDate;
  import java.time.format.DateTimeFormatter;

  public class TimeString {

      public static void main(String[] args) {
          // Format y-M-d or yyyy-MM-d
          String string = "2017-07-25";
          LocalDate date = LocalDate.parse(string, DateTimeFormatter.ISO_DATE);

          System.out.println(date);
      }
  }

  ussing Date using pattern formatters

          String string = "July 25, 2017";

          DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MMMM d, yyyy", Locale.ENGLISH);
          LocalDate date = LocalDate.parse(string, formatter);

          System.out.println(date);
      }
