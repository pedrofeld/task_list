import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Ler a documentação oficial do React",
      completed: false,
    },
    {
      id: 2,
      title: "Fazer compras",
      description: "Comprar mantimentos para a semana",
      completed: true,
    },
    {
      id: 3,
      title: "Exercitar-se",
      description: "Fazer uma caminhada de 30 minutos",
      completed: false,
    },
  ]);
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
