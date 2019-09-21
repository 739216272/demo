import MakeTestPaper from '@/test/MakeTestPaper'
import TestPaperManage from '@/test/TestPaperManage'
import TestResult from '@/test/TestResult'
import TestSetter from '@/test/TestSetter'
import ViewTestPaper from '@/test/ViewTestPaper'

export default [
      {
        path: "/MakeTestPaper",
        name: "MakeTestPaper",
        component: MakeTestPaper
      },
      {
        path: "/TestPaperManage",
        name: "TestPaperManage",
        component:TestPaperManage
      },
      {
        path: "/TestResult",
        name: "TestResult",
        component:TestResult
      },
      {
        path: "/TestSetter",
        name: "TestSetter",
        component:TestSetter
      },
      {
        path: "ViewTestPaper",
        name: "ViewTestPaper",
        component:ViewTestPaper
      }
    ]