var order = prompt("1: Coffee\n2: Tea\n3: Milk\n4: Chocolate Eclair\n5: Glazed Donut\n6: Donut with sprinkles\n\nPlease enter order");

switch (order){
  case "1":
    console.log("Delivering Coffee");
    break;
  case "2":
    console.log("Delivering Tea");
    break;
  case "3":
    console.log("Delivering Milk");
    break;
  case "4":
    console.log("Delivering Chocolate Eclair");
    break;
  case "5":
    console.log("Delivering Glazed Donut");
    break;
  case "6":
    console.log("Delivering Donut with sprinkles");
    break;
  default:
    console.log("No such item.");
}





