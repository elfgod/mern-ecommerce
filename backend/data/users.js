import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'alienbyte@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Josue Guzman',
        email: 'josue@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Yarelis Pegasusgirl',
        email: 'yarelis@example.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users;