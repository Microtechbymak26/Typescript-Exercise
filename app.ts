let personName: string ='';

personName = prompt('what is your name?') || '';

if(personName !== null && personName !==''){
    alert(`Hello ${personName}, would you like to learnsome python today?`)
}
else{
    alert('You Have to fill your name !')   
}
