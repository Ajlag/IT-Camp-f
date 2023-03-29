//Primitivni i referentni tipovi podataka
// primitivni: number, string, boolean, undefined, null, symbol
//referentni : objekat, niz, funkcija
//number
a = 5;
console.log(a);
//typeof provera tipa podataka
console.log(typeof a);

//string
name = "Ajla";
console.log(name);
console.log(typeof name);

letters =
  "adhasdasdhasdjashjdasjdhkasdhajskdjasjdjkjkasjkdjkassdkkajsdasjkadsdkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj";
console.log(letters);

//boolean - true or false
snegPaga = false;
console.log(snegPaga);
console.log(typeof snegPaga);
//undefined
// b;
// console.log(b);
// console.log(5 + 2 + "nesto");

prvi = 11;
drugi = 5;

saberi = prvi + drugi;
console.log(saberi);

pomnozi = prvi * drugi;
console.log(pomnozi);

kvadrat = prvi ** 2;
console.log(kvadrat);

deli = prvi / drugi;
console.log(deli);

// %
moduo = prvi % drugi;
console.log(moduo);

prvi++;
prvi = prvi + 10;
prvi += 10;
console.log(prvi);

drugi--;
drugi -= 2;
console.log(drugi);

prviB = 11;
drugiB = 5 + 5;
// == uporedjuje vrednost
// === uporedjuje vrednost i tip podatke
console.log(prviB == drugiB);
console.log(prviB === drugiB);

console.log(prviB != drugiB);
console.log(prviB !== drugiB);

//  ||  ili
//   &&  i

console.log(true || false);
console.log(false || false);
console.log(false || true);
console.log(true || true);
console.log("---------------------------------");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

prezime = 10;
console.log(isNaN(prezime));

// if(uslov){
//   body
// }

c = 12;
e = 5;

if (c < e) {
  console.log("C je vece od E");
} else {
  console.log("E nije vece od C");
}

console.log(c < e);
//Da li je c paran broj
if (c % 2 === 0) {
  console.log("C je paran broj");
} else {
  console.log("C je neparan broj");
}
