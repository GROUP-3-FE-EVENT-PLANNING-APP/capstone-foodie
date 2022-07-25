import { React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import MyProfile from '../pages/MyProfile';
import MyResto from '../pages/MyResto';
import MyFavorite from '../pages/MyFavorite';
import AdminResto from '../pages/AdminResto';
import Detail from '../pages/Detail';
import ListUser from '../pages/ListUser';
import AddResto from '../pages/AddResto';
import Booking from '../pages/Booking';
import DetailAdmin from '../pages/DetailAdmin';
import EditResto from '../pages/EditResto';
import { ThemeContext } from '../utils/context';
import UploadImage from '../pages/UploadImage';
import { useEffect, useState, useMemo } from 'react';

function Rot(props) {
  const [theme, setTheme] = useState('light');
  const background = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    handleThemeChange();
  }, [theme]);

  const handleThemeChange = () => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <ThemeContext.Provider value={background}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/myresto" element={<MyResto />} />
          <Route path="/myfavorite" element={<MyFavorite />} />
          <Route path="/booking/:detail_id" element={<Booking />} />
          <Route path="/adminresto" element={<AdminResto />} />
          <Route path="/listuser" element={<ListUser />} />
          <Route path="/addresto" element={<AddResto />} />
          <Route path="/detail/:detail_id" element={<Detail />} />
          <Route path="/uploadimage" element={<UploadImage />} />
          <Route path="/admindetail/:admindetail_id" element={<DetailAdmin />} />
          <Route path="/editresto/:editresto_id" element={<EditResto />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default Rot;
