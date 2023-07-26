import { useRouter } from "next/router";

const SelectedProjectFilePage = () => {
  const route = useRouter();
  console.log(route.query);
  return (
    <div>
      <h1>Selected Project File Page</h1>
    </div>
  );
};
export default SelectedProjectFilePage;
