import { createContext, useState, useContext } from "react";

const CourseContext = createContext();

export function CourseProvider({ children }) {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <CourseContext.Provider
      value={{
        courses,
        setCourses,
        selectedCourse,
        setSelectedCourse
      }}
    >
      {children}
    </CourseContext.Provider>
  );
}

export function useCourse() {
  return useContext(CourseContext);
}