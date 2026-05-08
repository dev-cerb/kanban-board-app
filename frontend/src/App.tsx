import Board from "./components/Board";

function App() {
  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900 transition-colors">
      <h1 className="mb-6 text-xl">Kanban Board App</h1>
      <Board />
    </div>
  );
}

export default App;
