type UserAccount = {
  id: string;
  email: string;
  profile: {
    name: string;
  };
  createdAt: Date;
};

export class UserRegistry {
  users: UserAccount[] = [];
  nextId: number = 1;

  public registerUser(data: Omit<UserAccount, "id" | "createdAt">): UserAccount {
    const newUser: UserAccount = {
      id: "user" + this.nextId,
      createdAt: new Date(),
      email: data.email,
      profile: data.profile,
    };
    this.users.push(newUser);
    this.nextId++;
    return newUser;
  }

  public getUserView(
     id: string,
  ): Readonly<Pick<UserAccount, "id" | "email" | "profile">> | undefined {
    const found = this.users.find((user) => user.id === id);

    if (!found) {
      return undefined;
    }

    return Object.freeze({
      id: found.id,
      email: found.email,
      profile: found.profile,
    });
  }
}
