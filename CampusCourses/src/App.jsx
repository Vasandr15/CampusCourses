import {CourseProvider} from "./CourseProvider/CourseProvider.jsx";
import CoursePage from "./pages/CoursePage/CoursePage.jsx";


function App() {

  return (
    <>
      <CourseProvider>
        <CoursePage/>
      </CourseProvider>
    </>
  )
}

export default App
