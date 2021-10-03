import { Route } from "react-router"
import App from "../App";
import { Booking } from "../Components/Booking-page/Booking";
import { SignIn } from "../Components/SignIn-page/SignIn";
import { SignUp } from "../Components/SignUp-page/SignUp";
import { Payment } from "../Components/Payment-page/Payment";
import { Dashboard } from "../Components/Dashboard-page/Dashboard";
import { Checkout } from "../Components/Checkout-page/Checkout-main";
import { ThankYou } from "../Components/ThankYou/ThankYou";
export const Routes = ()=>{
    return (
        <>
            <Route exact path="/">
                <App />
            </Route>
            <Route path="/booking">
                <Booking />
            </Route>
            <Route path="/signup">
                <SignUp />
            </Route>
            <Route path='/signin'>
                <SignIn />
            </Route>
            <Route exact path="/payment">
                <Payment />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
            <Route path="/checkout">
                <Checkout />
            </Route>
            <Route exact path="/payment/thankyou">
                <ThankYou />
            </Route>

        </>
    );
}