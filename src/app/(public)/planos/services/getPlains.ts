export default async function getPlains() {
  //const response = await fetch('https://reqres.in/api/users');
  const plains = {
    data: [
      {
        id: "plain1",
        name: "Initial",
        price: 49.90,
        attributes: "Atibuto 1; Atributo 2; Atributo 3; Atributo 4; Atributo 5"
      },
      {
        id: "plain2",
        name: "Intermedium",
        price: 99.90,
        attributes: "Atibuto 1; Atributo 2; Atributo 3; Atributo 4; Atributo 5"
      },
      {
        id: "plain1",
        name: "Advanced",
        price: 149.90,
        attributes: "Atibuto 1; Atributo 2; Atributo 3; Atributo 4; Atributo 5"
      }
    ]
  } 

  return plains
}