import useData from "../../Hooks/data/useData";

const Invoice = () => {
  const { deliveryInfo } = useData();
  console.log(deliveryInfo);
  return <div>Order invoice</div>;
};

export default Invoice;
