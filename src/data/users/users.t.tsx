interface User {
  id: string;
  email: string;
  username: string;
  password: string;
  role: 'Admin' | 'Users' | 'MJ';
}
