import {CourseProvider} from "./contexts/CourseProvider.jsx";
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
