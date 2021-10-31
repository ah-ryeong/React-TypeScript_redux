import { Dispatch } from 'redux';
import { getUserProfile } from '../../api/github';
import { getUserProfileAsync } from './actions';

export function getUserProfileThunk(username: string) {
    return async (dispatch: Dispatch) => {
        const { request, success, failure } = getUserProfileAsync;
        dispatch(request());

        const userProfile = await getUserProfile(username);
        dispatch(success(userProfile));
        // try {
        //     const userProfile = await getUserProfile(username);
        //     dispatch(success(userProfile));
        // } catch (e) {
        //     dispatch(failure(e));
        // }
    };
}

