var shovon = {
    firstName: 'shovon',
    lastName: 'ahammed',
    birthYear: 1996,
    familyMember: ['Dad', 'Mom', 'Brother'],
    job: 'N/A',
    isMarried: false,
    calcAge: function(birthYear){
        console.log('The birth year is:'+ this.birthYear); // We can access object element iniside object usin "this" keyword
        return 2020 - birthYear;
    }
}
console.log(shovon);
console.log(shovon['isMarried']); //We can print this way.
console.log(shovon.firstName);// We can print this way too..
shovon.gf = 'no gf'; // This way we can add new property to object
console.log(shovon.gf);
console.log(shovon);
console.log(shovon.calcAge(shovon.birthYear));

