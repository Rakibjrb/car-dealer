const generateNumber = () => {
  const number = Math.random().toString();
  return number.slice(2);
};
export default generateNumber;
