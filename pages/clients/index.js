import Link from "next/link";
const ClientsPage = () => {
  return (
    <div>
      <h1>Clients Page</h1>
      <ul>
        <li>
          <Link
            href={{
              pathname: "/clients/[id]",
              query: { id: "max" },
            }}
          >
            {" "}
            Max
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default ClientsPage;
