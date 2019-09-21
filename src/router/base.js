import ClassManage from '@/base/ClassManage'
import ModifyPassword from '@/base/ModifyPassword'
import StudentManage from '@/base/StudentManage'
import TeacherManage from '@/base/TeacherManage'

export default [
      {
        path: "/ClassManage",
        name: "ClassManage",
        component: ClassManage
      },
      {
        path: "/ModifyPassword",
        name: "ModifyPassword",
        component:ModifyPassword
      },
      {
        path: "/StudentManage",
        name: "StudentManage",
        component:StudentManage
      },
      {
        path: "/TeacherManage",
        name: "TeacherManage",
        component:TeacherManage
      }
    ]