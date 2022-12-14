import TaskForm from "../forms/TaskForm";

/**
 *  task types define
 */
export interface ITask {
  id?: any;
  title: string;
  description?: string;
  assign_to?: string;
}

function TaskCreate() {
  const task = {
    id: 0,
    title: "",
    description: "",
    assign_to: "",
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-10 pt-10 ">
        <div className="w-2/5 flex justify-center items-center">
          <div className="font-bold text-lg">Task Create</div>
        </div>
        <div className="rounded-md border border-solid shadow-xl w-1/3 px-10 py-5 ">
          {/** create new task form */}
          <TaskForm task={task} mode="create" />
        </div>
      </div>
    </div>
  );
}

export default TaskCreate;
