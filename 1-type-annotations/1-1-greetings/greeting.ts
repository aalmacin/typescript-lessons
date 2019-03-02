const greeter = (subject?: string) => `Hello ${subject || 'World'}`

const getUpdateElement = (greetingElement: string) => document.getElementById(greetingElement); 


getUpdateElement('greeting').innerHTML = greeter();
getUpdateElement('greeting2').innerHTML = greeter('Potato');
