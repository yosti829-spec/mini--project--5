import Header from "../components/Header";
import { useTasks } from "../store/taskContext";

export default function Stats() {
  const { tasks } = useTasks();

  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const remaining = total - completed;

  return (
    <>
      <Header />
      <div className="stats">
        <p>Total Tasks: {total}</p>
        <p>Completed Tasks: {completed}</p>
        <p>Remaining Tasks: {remaining}</p>
      </div>
    </>
  );
}
