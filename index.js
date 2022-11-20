const fullfamily = {};
const namePerson = '';
const whoThatPerson = '';

function isCompleteFamily(key,member,family){

for (let i = 0; i < 3; i++) {
 key = prompt ('Please enter a name ');
 member = prompt ('who is it?');
 if (isNaN(Number(key))===false||key === null || key === " " ||key === Number(key) )
     {  console.log ("try again")
     break;}
        family[key] = member;
        continue;}
 }

 console.log(isCompleteFamily(namePerson,whoThatPerson,fullfamily));

 for(const key in fullfamily ){
   console.log(`${key} = ${fullfamily[key]}`);
 }