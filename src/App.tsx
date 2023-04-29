import "./styles/global.css";

import MyAccount from "./components/Fup/MyAccount";
import ModalCandidatura from "./components/Modals/ModalViewApplication";
import ModalAlocacao from "./components/Modals/ModalAlocation";
import ModalSimilarAlocation from "./components/Modals/ModalSimilarAlocation";
import DropdownMenuAccount from "./components/paginaPrincipal/Modals/ModalsAccount";
import ModalSummaryAgenda from "./components/paginaPrincipal/Modals/ModalAgendaSummary";
import ValidationForm from "./components/teste";
import ModalAnnouncement from "./components/paginaPrincipal/Modals/ModalAnnouncement";
import ModalSummaryDay from "./components/paginaAgenda/ModalSummaryDay";
import ModalConfirmAction from "./components/Modals/ModalConfirmAction";
import ModalNewSimilarAlocation from "./components/Modals/ModalNewSimilarAlocation";
import ModalHumor from "./components/paginaPrincipal/Modals/ModalHumor";
import ModalAgendar from "./components/Modals/ModalAgendar";
import { useStepper } from "./components/steps/stepper";
import RecoverPassword from "./components/RecoverPassword";
import ForgotPassword from "./components/ForgotPassword";

const App = () => {
  const { Stepper, returnStep, nextStep, currentStep } = useStepper();
  return (
    <main className="bg-gray-400">
      {/* <RecoverPassword /> */}
      <ForgotPassword />
      {/* <header className="w-full h-16 bg-[#8565E6]" /> */}
      {/* <div className="flex flex-col justify-center items-center gap-4 group ">
        <ModalConfirmAction
          trigger={
            <button className="bg-green-300 p-4 rounded-lg hover:bg-green-300/60 shadow-lg shadow-green-300/50">
              Modal Confirmar Ação
            </button>
          }
          triggerCancel={
            <button className="bg-red-400 p-2 rounded-lg text-white">
              Não
            </button>
          }
          triggerConfirm={
            <button className="bg-green-500 p-2 rounded-lg  text-white">
              Sim
            </button>
          }
        />

        <ModalCandidatura
          trigger={
            <button className="bg-green-400 p-4 rounded-lg ">
              Modal Candidatura
            </button>
          }
          triggerCancel={
            <button className="bg-red-500 p-4 rounded-lg  text-white ">
              Cancelar
            </button>
          }
          triggerConfirm={
            <button className="bg-green-700 p-4 rounded-lg  text-white ">
              Enviar
            </button>
          }
        />
        <ModalAlocacao
          trigger={
            <button className="bg-green-500 p-4 rounded-lg ">
              Modal Alocação
            </button>
          }
        />

        <ModalSimilarAlocation
          trigger={
            <button className="bg-green-600 p-4 rounded-lg ">
              Modal Alocação Similar
            </button>
          }
          triggerConfirm={
            <button className="bg-blue-500 p-2 rounded-md text-white">
              Solicitar Alocação
            </button>
          }
        />

        <ModalNewSimilarAlocation
          trigger={
            <button className="bg-green-700 p-4 rounded-lg">
              Modal Nova Alocação Similar
            </button>
          }
          triggerConfirm={
            <button className="bg-blue-500 p-2 rounded-md text-white">
              Solicitar Alocação
            </button>
          }
        />

        <ModalAgendar
          trigger={
            <button className="bg-green-800 p-4 rounded-lg">
              Modal Agendar
            </button>
          }
        />

        <DropdownMenuAccount
          trigger={
            <button className="bg-yellow-300 p-4 rounded-lg">
              Modal DropDown Menu
            </button>
          }
        />

        <ModalSummaryAgenda
          trigger={
            <button className="bg-yellow-400 p-4 rounded-lg">
              Modal Summary Agenda
            </button>
          }
        />

        <ModalAnnouncement
          trigger={
            <button className="bg-yellow-500 p-4 rounded-lg">
              Modal Fazer comunidado
            </button>
          }
        />

        <ModalHumor
          trigger={
            <button className="bg-yellow-600 p-4 rounded-lg">
              Modal Humor Profissional
            </button>
          }
        />

        <ModalSummaryDay
          trigger={
            <button className="bg-purple-300 p-4 rounded-lg">
              Modal Resumo do dia
            </button>
          }
        />
      </div> */}
      {/* <div className="flex flex-col gap-10 items-center justify-center">
        {Stepper && <Stepper />}
      </div>
      <button
        onClick={returnStep}
        disabled={currentStep === 1}
        className="p2 w-12 h-12 rounded-lg bg-orange-400"
      >
        Voltar
      </button>

      <button
        onClick={nextStep}
        className="p2 w-12 h-12 rounded-lg bg-orange-400"
      >
        Next {currentStep}
      </button> */}

      {/* <ValidationForm /> */}

      {/* <MyAccount /> */}
    </main>
  );
};

export default App;
