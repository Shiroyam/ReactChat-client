import { FC, useEffect } from "react";
import { InputReg } from "../../components/inputReg/InputReg";
import { Link } from "react-router-dom";
import { useAppDispatch, useTypesSelector } from "../../hook/useTypeSelector";
import { singIn } from "../../redux/registration/action";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import s from "./registration.module.scss";

export const Registration: FC = () => {
  const { fetchingSuccess } = useTypesSelector((state) => state.regReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onClickBtn = (fullName: string, email: string, password: string) => {
    const data = {
      fullName,
      email,
      password,
    };
    dispatch(singIn(data));
  };

  useEffect(() => {
    if (fetchingSuccess) {
      setTimeout(() => navigate("/authorization"), 1000);
    }
  }, [fetchingSuccess]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
      <div className={s.registration}>
        <div className={s.registration__modal}>
          <header className={s.registration__header}>Sign Up</header>
          <InputReg onClickBtn={onClickBtn} />
          <Link to="/" className={s.registration__link}>
            <div>Back to home?</div>
          </Link>
        </div>
      </div>
    </>
  );
};
