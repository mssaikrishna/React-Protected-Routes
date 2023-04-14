import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Sidebar from './components/sidebar/sidebar.jsx'
import Dashboard from './pages/dashboard/dashboard.jsx'
import HolidayList from './pages/holiday-list/holiday-list.jsx'
import LeaveApplication from './pages/leave-application/leave-application.jsx'
import LeaveExtension from './pages/leave-extension/leave-extension.jsx'
import LogOut from './pages/logout/logout.jsx'
import VofoxCalendar from './pages/vofox-calendar/vofox-calendar.jsx'
import UserProfile from './pages/user-profile/user-profile.jsx'
import ChangePassword from './pages/change-password/change-password.jsx'
import LeaveCalendar from './pages/leave-calendar/leave-calendar.jsx'
import LeaveCalendarComponent from './pages/leave-calendar-application/leave-calendar-application.jsx'
import LeaveDisplayCalendar from './pages/leave-display-calendar/leave-display-calendar.jsx'
import { useState } from 'react'
import ForgotPassword from './pages/forgot-password/forgot-password.jsx'
import Login from './pages/login/login.jsx'
import ProtectedRoute from './protectedroute.jsx'

export default function App() {
 
  const isAuth = localStorage.getItem('token') != null;
  console.log(isAuth)
  return (
    // <Routes>
    //   {/* <Route path="/" element={<Home />} /> */}
    //   <Route path="/" element={<Sidebar />} />
    // </Routes>

    <div className="flex min-h-full">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/leave-application" element={<LeaveApplication />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/leave-extension" element={<LeaveExtension />} />
        <Route path="/holiday-list" element={<HolidayList />} />
        <Route path="/vofox-calendar" element={<VofoxCalendar />} />
        <Route path="/logout" element={<LogOut />} />
//         <ProtectedRoute><Route path="/dashboard" element={<Dashboard />} auth={isAuth} /></ProtectedRoute>
        <Route path="/dashboard" element={<ProtectedRoute auth={isAuth}><Dashboard/></ProtectedRoute>}></Route>
        <Route path="/leave-calendar" element={<LeaveCalendar />} />
        <Route path="/leave-display-calendar" element={<LeaveDisplayCalendar />} />
       <Route path="/leave-calendar-application" element={<LeaveCalendarComponent />} />
      </Routes>
      {/* <Sidebar/> */}

      {/* <Drawer open={true}><Link className="text-center fnt" to="/user-profile">
        <h3>Name</h3>
        <h4>Designation</h4>
      </Link></Drawer> */}
    </div>
  )
}
