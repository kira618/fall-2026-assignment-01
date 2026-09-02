type RemoteUser = {
  id: number;
  name: string;
  email: string;
};
export async function fetchUserEmails(): Promise<string[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const users: RemoteUser[] = [];
  for (let i = 0; i < data.length; i++) {
    users.push({
      id: data[i].id,
      name: data[i].name,
      email: data[i].email,
    });
  }

  const emails: string[] = [];
  for (let i = 0; i < users.length; i++) {
    emails.push(users[i].email);
  }

  return emails;
}
