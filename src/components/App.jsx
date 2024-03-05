import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layuot } from './Layout';
import { Suspense } from 'react';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { refreshUser } from '../redux/auth/operation';
import { selectIsRefreshing } from '../redux/auth/selector';
import { selectIsLoading } from '../redux/contacts/selector';

const HomePage = lazy(() => import('../Pages/Home'));
const RegisterPage = lazy(() => import('../Pages/Register'));
const LoginPage = lazy(() => import('../Pages/Login'));
const TasksPage = lazy(() => import('../Pages/Contacts'));
export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  const isRefreshed = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isRefreshed ? (
        <h2>Loading...</h2>
      ) : (
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Layuot />}>
              <Route index element={<HomePage />} />
              <Route
                path="/login"
                element={<RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />}
              />
              <Route
                path="/register"
                element={<RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />}
              />
              <Route
                path="/tasks"
                element={<PrivateRoute redirectTo="/login" component={<TasksPage />} />}
              />
            </Route>
          </Routes>
        </Suspense>
      )}
      {isLoading && <h2>Loading...</h2>}
    </>
  );
};
