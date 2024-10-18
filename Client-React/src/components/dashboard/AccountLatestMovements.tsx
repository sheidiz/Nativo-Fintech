import { Transaction } from "../../interfaces/Transaction";
import { BiChevronDown } from "react-icons/bi";
import useSmoothNavigate from "../../hooks/useSmoothNavigate";

interface AccountLatestMovementsProps {
  latestMovements: Transaction[];
  accountId: string | null;
}

const AccountLatestMovements: React.FC<AccountLatestMovementsProps> = ({
  latestMovements,
  accountId,
}) => {
  const smoothNavigate = useSmoothNavigate();

  return (
    <>
      <h3>Últimos movimientos</h3>
      <ul className="flex flex-col gap-4 pl-2 pr-6 pt-6">
        {latestMovements ? (
          latestMovements.map((transaction: Transaction) => (
            <li key={transaction.id} className="flex justify-between">
              <div>
                <p>{transaction.formattedDate}</p>
                <p>{transaction.transaction}</p>
                <p className="text-sm font-medium">{transaction.description}</p>
              </div>
              <p
                className={`font-semibold ${(transaction.status == "DENIED" || transaction.status == "EXPIRED") && "line-through"}`}
              >
                {transaction.status == "ACCEPTED" ||
                transaction.status == "PENDING"
                  ? transaction.receiverAccount == accountId
                    ? "+"
                    : "-"
                  : ""}
                ${transaction.amount.toLocaleString()}
              </p>
            </li>
          ))
        ) : (
          <p>Sin movimientos</p>
        )}
      </ul>
      {/* CAMBIAR A RUTA DE HISTORIAL COMPLETO */}
      <div className="mt-3 w-full text-end font-medium text-blue-400">
        <button
          onClick={() => smoothNavigate("/history")}
          className="text-xs leading-3"
        >
          Ver más <BiChevronDown className="inline text-2xl" />
        </button>
      </div>
    </>
  );
};

export default AccountLatestMovements;
