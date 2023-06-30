import {Redirect} from "react-router-dom";
import React from "react";

//let mapStateToPropsFprRedirect = (state) = > {
//  isAuth: state.auth.isAuth
//}
export const withAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to="/login"/>
            return <Component {...this.props}/>
        }
    }

    return RedirectComponent
}