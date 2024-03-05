function Hello() {
  let myName = "Zeeshan";
  let number = 909;
  let fullName = () => {
    return "Chaudhary Muhammad Zeeshan Zaka Chadhar";
  };
  return <h3>This is react tutorial presented by {fullName()}</h3>;
}

export default Hello;
