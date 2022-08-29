/*
 * Наслідування з extends та super
 */
class Developer {
  #login;
  #email;

  constructor({ countOfProjects, firstName, lastName, age, login, email } = {}) {
    this.countOfProjects = countOfProjects;
    this.firstName = firstName;
    this.lastName = lastName;
    this.userAge = age;
    this.#login = login;
    this.#email = email;
  }

  get login() {
    return this.#login;
  }

  set login(newLogin) {
    this.#login = newLogin;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }

  getFullName() {
    return `${this.#trimStr(this.firstName)} ${this.#trimStr(this.lastName)}`;
  }

  #trimStr(str) {
    return str.trim();
  }

  doDeveloperWork() {
    console.log(`Роблю якусь роботу`);
  }
}

class Manager {
  #login;
  #email;

  constructor({ managerProp, firstName, lastName, age, login, email } = {}) {
    this.managerProp = managerProp;
    this.firstName = firstName;
    this.lastName = lastName;
    this.userAge = age;
    this.#login = login;
    this.#email = email;
  }

  get login() {
    return this.#login;
  }

  set login(newLogin) {
    this.#login = newLogin;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }

  getFullName() {
    return `${this.#trimStr(this.firstName)} ${this.#trimStr(this.lastName)}`;
  }

  #trimStr(str) {
    return str.trim();
  }

  doManagerWork() {
    console.log(`Роблю якусь роботу`);
  }
}
