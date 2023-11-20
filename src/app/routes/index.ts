import express from 'express';
import { userRoutes } from '../modules/users/user.routes';
import { StudentRoutes } from '../modules/student/student.routes';
import { TeachersRoutes } from '../modules/teachers/teacher.routes';
import { PostRoutes } from '../modules/posts/post.routes';


const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,

  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/teachers',
    route: TeachersRoutes,
  },
  {
    path: '/posts',
    route: PostRoutes,
  }
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
