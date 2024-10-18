import ApplyMicrocreditForm from "../../components/microcredits/ApplyMicrocreditForm";
import useSmoothNavigate from "../../hooks/useSmoothNavigate";

const ApplyMicrocreditsPage: React.FC = () => {
  const smoothNavigate = useSmoothNavigate();

  return (
    <div className="bg-[#E1F0D7] pb-8">
      <article className="flex w-full flex-col items-center justify-center gap-4 bg-[#E1F0D7] py-10">
        <h1 className="w-2/3 text-center text-xl font-bold">
          Gestión de microcréditos.
        </h1>
        <img
          src="./microcredits/personal_finance.png"
          alt="Imagen solicitando microcrédito"
        />
        <h2 className="w-2/3 text-center text-base font-bold">
          Solicitud de Microcréditos
        </h2>
      </article>
      <div className="bg-[#8EC63F] px-8 py-6 text-center">
        “El monto posible es hasta $500.000, a abonar en una cuota fija en 30
        días.”
      </div>
      <section>
        <ApplyMicrocreditForm />
        <div className="mt-2 flex flex-col items-center justify-center">
          <button
            onClick={() => smoothNavigate("/history-microcredits")}
            className="rounded-full bg-[#b0b0b0] px-12 py-2 text-lg font-semibold text-black"
          >
            Ver mi historial de microcréditos
          </button>
        </div>
      </section>
    </div>
  );
};

export default ApplyMicrocreditsPage;
