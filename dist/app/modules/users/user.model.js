"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    // id: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    role: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        match: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
        minlength: 8
    },
    studentId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Student', //collection name as
    },
    parentId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Parent', //collection name as
    },
    facilitatorId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Facilitator', //collection name as
    },
    adminId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Admin'
    },
});
// userSchema.pre<IUser>('save',async function (next) {
//   this.password = await bcrypt.hash(this.password, Number(config.salt_rounds));
//   next();
// })
exports.User = (0, mongoose_1.model)('User', userSchema);
