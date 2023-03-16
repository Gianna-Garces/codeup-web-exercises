/*
 * Complete the TODO items below
 */
const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    },
    {
        name: 'gianna',
        email: 'gianna@hello.com',
        languages: ['HTML', 'CSS', 'JavaScript']
    }
];

// TODO: fill in your name and email and add some programming languages you know - done
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'Gianna Garces';
const email = 'gianna@hello.com';
const languages = ['HTML', 'CSS', 'JavaScript'];

// TODO: rewrite the object literal using object property shorthand - done
users.push({
    name,
    email,
    languages
});

// TODO: replace `var` with `let` in the following variable declarations - done
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions - done
users.forEach( (user) => {
    emails.push(user.email);
    console.log(emails);
});
users.forEach( (user) => {
    names.push(user.name);
    console.log(names);
});

// TODO: replace `var` with `let` in the following declaration -done
let developers = [];
users.forEach(function(user) {
    // TODO: rewrite the code below to use object destructuring assignment
    //       note that you can also use destructuring assignment in the function
    //       parameter definition - done
    // const name = user.name;
    // const email = user.email;
    // const languages = user.languages;

    const {name, email, languages} = user
    console.log(user);

    // TODO: rewrite the assignment below to use template strings
    // developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));

    developers.push(`${name}'s email is ${email}, ${name} knows ${languages.join}`)
});

// TODO: Use `let` for the following variable
var list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
developers.forEach(function (developer) {

    // TODO: rewrite the assignment below to use template strings
    list += '<li>' + developer + '</li>';
});
list += '</ul>';