"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
class TodoService {
    get(todoId) {
        //now we can make a function to find the exact todo with the same id but as of for now we just return the dummy data
        return {
            title: "title",
            description: "description",
            id: "dummyID",
            done: false,
        };
    }
    create(TodoCreationParams) {
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
exports.TodoService = TodoService;
