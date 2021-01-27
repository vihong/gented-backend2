const users = [
	{
		id       : 1,
		name     : 'James',
		email    : 'james@domain.com',
		password : 'james'
	},
	{
		id       : 2,
		name     : 'Sara',
		email    : 'sara@d.com',
		password : '12345'
	},
	{
		id       : 3,
		name     : 'Jean',
		email    : 'jean@mm.fr',
		password : '12345'
	}
];

const getUsers = () => users;

const getUserById = (id) => users.find((user) => user.id === id);

const getUserByEmail = (email) => users.find((user) => user.email === email);

const addUser = (user) => {
	user.id = users.length + 1;
	users.push(user);
};

module.exports = {
	getUsers,
	getUserByEmail,
	getUserById,
	addUser
};
