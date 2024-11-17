// For loop

// let firstName = "Xojakbar";
// let firstName1= "Akbarali";
// let firstName2 = "Sanjarbek";
// console.log(firstName, firstName1,firstName2)

const array = ["Xojiakbar", "Akbarali", "Sanjarbek"];

// for (let i = 0; i < array.length; i++) {l
//   console.log("array[i]");
// };

// while loop

// let i = 0;

// while (i < array.length) {
//   console.log(array[i]);
//   i++;
// }

// let i = 0;

// do {
//   console.log(array[i]);
//   i++;
// } while (i < 10);

// for (let i = 0; i <= 20; i += 2) {
//   console.log(i);
// }

// for (let i = array.length; i > array.length; i++) {
//   console.log(array[i]);
// }

// for (let i = array.length - 1; i >= 0; i--) {
//   console.log(array[i]);
// }

// let text = "Uzbekistan";
// let string = "";

// for (let i = text.length - 1; i >= 0; i--) {
//   string = string + text[i];
// }

// console.log(string);

// function natija(a, b) {
//   if (a > b) {
//     console.log(`${a} katta`);
//     console.log(`${b} kichkina`);
//   } else if (a < b) {
//     console.log(`${b} katta`);
//     console.log(`${a} kichik`);
//   }
// }

// natija(3, 9);

function jadval(a) {
  switch (1) {
    case 1:
      console.log("Duyshanba");
      break;
    case 2:
      console.log("Seyshanba");
      break;
    case 3:
      console.log("Chorshanba");
    case 4:
      console.log("Payshanba");
      break;
    case 5:
      console.log("Juma");
      break;
    case 6:
      console.log("Shanba");
      break;
    default:
      console.log("Bunday qiymat berilmagan");
  }
}

jadval(0)