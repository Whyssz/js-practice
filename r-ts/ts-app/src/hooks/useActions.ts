import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { AllActions } from "../store/actionCreators";

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(AllActions, dispatch);
};