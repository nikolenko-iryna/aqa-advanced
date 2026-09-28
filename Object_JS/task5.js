
                    const users = [{name: 'Maria'}, { email:'test@gvail.com'}, {age:25}];
                    for (let element of users) {
                        const {name, email, age} = element;
                        const users1 = name ??'Unnamed';
                        const users2 = email ?? 'Without an email';
                        const users3 = age ?? 'Age not specified';
                        console.log(users1, users2,users3);
                    }
        