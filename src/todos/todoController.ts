import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from "tsoa";
import { Todo } from "./todo";
import { TodoCreationParams, TodoService } from "./todoService";

//Controller from the tsoa contains logic to actully creates the routes and go through your endpoints
@Route("todo") //this controller is responsible for creating the routes related to "/todo" endpoints---> similiar to app.use("/todo",todoroutes);
export class TodoController extends Controller {
  @Get("{todoId}")
  public async getTodo(@Path() todoId: string): Promise<Todo> {
    //returns promise of type todo
    let todoService = new TodoService(); //creating object of the class
    return todoService.get(todoId);
  }
}
