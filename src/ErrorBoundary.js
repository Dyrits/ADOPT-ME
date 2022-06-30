import { Component } from "react";
import { Link, Navigate } from "react-router-dom";

class ErrorBoundary extends Component {
    state = { hasError: false, redirect: false };

    static getDerivedStateFromError(error) { return { hasError: true }; }

    componentDidCatch(error, info) { console.error(error, info); }

    componentDidUpdate() {
        if (this.state.hasError) { setTimeout(() => { this.setState({ redirect: true }); }, 5000); }
    }

    render() {
        if (this.state.redirect) { return <Navigate to="/" />; }
        if (this.state.hasError) {
            return (
                <h2>
                    Something went wrong. Check the console for more information.<br />
                    <Link to="/">Click here</Link> to go back to the homepage. Or, just wait for a while and you'll be back on the homepage. Or, not...
                </h2>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;