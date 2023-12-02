public class Solve {

   String[] fizzBuzz(int n) {
      String[] output = new String[n];
      for (int i = 1; i < n; i++) {
         if (i % 3 == 0 && i % 5 == 0) {
            output[i] = "FizzBuzz";
         } else if (i % 3 == 0) {
            output[i] = "Fizz";
         } else if (i % 5 == 0) {
            output[i] = "Buzz";
         } else {
            output[i] = String.valueOf(i);
         }
      }

      return output;
   }

   public static void main(String[] args) {

      Solve solve = new Solve();
      String[] output = solve.fizzBuzz(20);

      for (String n : output) {
         System.out.println(n);
      }
   }

}
