

let zeit = new Date()
console.log( zeit )

let jahr = zeit.setMonth()
console.log(jahr)

let tageImMonat = (moant,jahr ) => {
    return new Date(jahr,moant,0).getDate()
  
};

console.log(tageImMonat(1,2016))
console.log(tageImMonat(2, 2016))
console.log(tageImMonat(2, 2017))
console.log(tageImMonat(12, 2017))