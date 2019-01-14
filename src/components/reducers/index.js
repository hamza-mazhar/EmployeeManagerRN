import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import EmployeeFormReducer from "./EmployeeFormReduecers";

export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer
});
