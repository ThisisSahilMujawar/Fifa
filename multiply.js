var num = prompt("Enter the Number: ");
document.write("<h1>Multiplication table of " + num + " is </h1>");

for (var i = 1; i <= 10; i++) {
  document.write(num + " x " + i + " = " + num * i + "<br>");
}
