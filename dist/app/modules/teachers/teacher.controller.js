"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const teacher_service_1 = require("./teacher.service");
const shared_constant_1 = require("../../../constant/shared.constant");
//* Update Teacher Controller
const updateTeacherController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const teacher = req.body;
    const result = yield teacher_service_1.TeacherService.updateTeacher(id, teacher);
    (0, shared_constant_1.sendReponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Teacher Update successfully!',
        data: result,
    });
}));
// Find Facilitator By ID
const findFacilitatorByIdController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield teacher_service_1.TeacherService.findFacilitatorById(id);
    (0, shared_constant_1.sendReponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Teacher find successfully!',
        data: result,
    });
}));
//!Delete Teacher controller
const deleteTeacherController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield teacher_service_1.TeacherService.delteTeacher(id);
    (0, shared_constant_1.sendReponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Teacher Delete successfully!',
        data: result,
    });
}));
exports.TeacherController = {
    updateTeacherController,
    deleteTeacherController,
    findFacilitatorByIdController
};
