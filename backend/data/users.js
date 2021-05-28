import bcrypt from 'bcrypt';

const user = [
    {
        name: 'Admin User',
        email: 'alienbyte@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
    name: 'Josue Guzman',
    email: 'alienbyte@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Yarelis Pegasusgirl',
        email: 'alienbyte@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users;