function formatAddress(person) {
  return `${person.name}\n${person.address.street}\n${person.address.city}, ${person.address.state} ${person.address.zip}`;
}
let person = {
  name: "Alice",
  age: 25,
  hobbies: ["reading", "painting", "traveling"],
  address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001"
  }
};
let addressString = formatAddress(person);
console.log(addressString);
