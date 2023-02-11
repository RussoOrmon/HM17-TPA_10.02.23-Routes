import "./App.css";
import Logo from "./components/sidebar/Logo";
import Materials from "./components/materials/Materials";
import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/navbar/Header";
import Section1 from "./pages/Section1";
import Students from "./components/navbar/Students";
import SectionStudent1 from "./pages/SectionStudent1";

import Rating from "./components/navbar/Rating";
import Anouncements from "./components/sidebar/Anouncements";
import Notifications from "./components/sidebar/Notifications";
import Schedule from "./components/sidebar/Schedule";
import Submitted from "./components/materials/Submitted";
import Waiting from "./components/materials/Waiting";
import Late from "./components/materials/Late";
import { materials, students } from "./lib/data";

function App() {

  return (
    <div className="App">
      <h1>#hELlo@</h1>

      <Routes>
        <Route path="" element={<Logo />}>
          <Route path="courses" element={<Header />}>
            <Route path="materials" element={<Materials />} />

            {materials.map((item) => (
              <Route
                path="materials/:id/details"
                element={
                  <Section1 key={item.id} title={item.title} name={item.name} />
                }
              >
                <Route path="submitted" element={<Submitted />} />
                <Route path="waiting" element={<Waiting />} />
                <Route path="late" element={<Late />} />
              </Route>
            ))}

            <Route path="students" element={<Students />} />

            {students.map((item) => (
              <Route
                path="students/:id/details"
                element={
                  <SectionStudent1
                    key={item.id}
                    title={item.title}
                    name={item.name}
                  />
                }
              />
            ))}

            <Route path="ratings" element={<Rating />} />
          </Route>

          <Route path="anouncements" element={<Anouncements />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="schedule" element={<Schedule />} />
        </Route>
      </Routes>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
