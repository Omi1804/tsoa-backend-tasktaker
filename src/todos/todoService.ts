import { Todo } from "./todo";

export type TodoCreationParams = Pick<Todo, "title" | "description">; // this first creates a new type and then initializes it with Todo's interface's title and description, this is the dynamic way of doing the initialization.

export class TodoService {
  public get(todoId: string): Todo {
    //now we can make a function to find the exact todo with the same id but as of for now we just return the dummy data
    return {
      title: "title",
      description: "description",
      id: "dummyID",
      done: false,
    };
  }

  public create(TodoCreationParams: TodoCreationParams): Todo {
    //ideally we should do a database post here and then we should save the new todo in the database
    //but as of for now we just create a dummy todo
    return {
      title: "1",
      description: "description",
      id: "todo1",
      done: false,
    };
  }
}
