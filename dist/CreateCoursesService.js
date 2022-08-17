"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    execute({ name, description }) {
        console.log(name, description);
    }
}
exports.default = new CreateCourseService();
