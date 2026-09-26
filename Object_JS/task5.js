
const arrayUsers = [{name: 'Maria', email:'1243@gvail.com', age:25},
                    {name: 'Alex', email:'test@gvail.com', age:38}];
                    for (let element of arrayUsers) {
                        const {name, email, age} = element;
                        console.log (name, email, age);
                    }