"use client";

import React from "react";
import "./AuthPopup.css";
import logo from "../../app/assets/logo1.png";
import Image from "next/image";
import Input from "@mui/joy/Input";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { useAuth } from "@/app/context/AuthContext";

const AuthPopup: React.FC = () => {
    const { login } = useAuth();

    const [showSignup, setShowSignup] = React.useState<boolean>(false);

    // ─── Login state ───────────────────────────────────────────────────────────
    const [loginEmail, setLoginEmail] = React.useState("");
    const [loginPassword, setLoginPassword] = React.useState("");
    const [loginError, setLoginError] = React.useState("");
    const [loginLoading, setLoginLoading] = React.useState(false);

    // ─── Signup state ──────────────────────────────────────────────────────────
    const [name, setName] = React.useState("");
    const [signupEmail, setSignupEmail] = React.useState("");
    const [signupPassword, setSignupPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [weightInKg, setWeightInKg] = React.useState("");
    const [heightInCm, setHeightInCm] = React.useState("");
    const [gender, setGender] = React.useState<string | null>(null);
    const [dob, setDob] = React.useState("");
    const [goal, setGoal] = React.useState<string | null>(null);
    const [activityLevel, setActivityLevel] = React.useState<string | null>(null);
    const [signupError, setSignupError] = React.useState("");
    const [signupLoading, setSignupLoading] = React.useState(false);

    // ─── Handlers ─────────────────────────────────────────────────────────────

    const handleLogin = async () => {
        if (!loginEmail || !loginPassword) {
            setLoginError("Please enter your email and password.");
            return;
        }
        setLoginError("");
        setLoginLoading(true);
        try {
            const response = await fetch("http://localhost:8000/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include", // receive httpOnly cookies
                body: JSON.stringify({ email: loginEmail, password: loginPassword }),
            });
            const data = await response.json();
            if (data.ok) {
                login();
            } else {
                setLoginError(data.message || "Invalid credentials. Please try again.");
            }
        } catch {
            setLoginError("Network error. Please check your connection and try again.");
        } finally {
            setLoginLoading(false);
        }
    };

    const handleSignup = async () => {
        // Client-side validation
        if (!name.trim()) { setSignupError("Full name is required."); return; }
        if (!signupEmail.trim()) { setSignupError("Email is required."); return; }
        if (!signupPassword) { setSignupError("Password is required."); return; }
        if (signupPassword !== confirmPassword) { setSignupError("Passwords do not match."); return; }
        if (!weightInKg) { setSignupError("Weight is required."); return; }
        if (!heightInCm) { setSignupError("Height is required."); return; }
        if (!gender) { setSignupError("Please select your gender."); return; }
        if (!dob) { setSignupError("Date of birth is required."); return; }
        if (!goal) { setSignupError("Please select your fitness goal."); return; }
        if (!activityLevel) { setSignupError("Please select your activity level."); return; }

        setSignupError("");
        setSignupLoading(true);
        try {
            const response = await fetch("http://localhost:8000/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({
                    name: name.trim(),
                    email: signupEmail.trim(),
                    password: signupPassword,
                    weightInKg: Number(weightInKg),
                    heightInCm: Number(heightInCm),
                    gender,
                    dob,
                    goal,
                    activityLevel,
                }),
            });
            const data = await response.json();
            if (data.ok) {
                // Registration success — now auto-login
                const loginRes = await fetch("http://localhost:8000/auth/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    body: JSON.stringify({ email: signupEmail.trim(), password: signupPassword }),
                });
                const loginData = await loginRes.json();
                if (loginData.ok) {
                    login();
                } else {
                    // Registration succeeded but auto-login failed — switch to login form
                    setShowSignup(false);
                }
            } else {
                setSignupError(data.message || "Signup failed. Please try again.");
            }
        } catch {
            setSignupError("Network error. Please check your connection and try again.");
        } finally {
            setSignupLoading(false);
        }
    };

    // ─── Render ───────────────────────────────────────────────────────────────

    return (
        <div className="popup">
            {showSignup ? (
                // ── SIGNUP ────────────────────────────────────────────────────
                <div className="authform">
                    <div className="left">
                        <Image src={logo} alt="logo" />
                    </div>

                    <div className="right">
                        <h1>Create your account</h1>

                        {signupError && <p className="auth_error">{signupError}</p>}

                        <form onSubmit={(e) => { e.preventDefault(); handleSignup(); }}>

                            {/* Name */}
                            <Input
                                color="warning" size="lg" variant="outlined"
                                placeholder="Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            {/* Email */}
                            <Input
                                color="warning" size="lg" variant="outlined"
                                placeholder="Email" type="email"
                                value={signupEmail}
                                onChange={(e) => setSignupEmail(e.target.value)}
                            />

                            {/* Password */}
                            <Input
                                color="warning" size="lg" variant="outlined"
                                placeholder="Password" type="password"
                                value={signupPassword}
                                onChange={(e) => setSignupPassword(e.target.value)}
                            />

                            {/* Confirm Password */}
                            <Input
                                color="warning" size="lg" variant="outlined"
                                placeholder="Confirm Password" type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />

                            {/* Weight & Height */}
                            <div className="form_input_leftright">
                                <Input
                                    color="warning" size="lg" variant="outlined" type="number"
                                    placeholder="Weight (kg)"
                                    value={weightInKg}
                                    onChange={(e) => setWeightInKg(e.target.value)}
                                />
                                <Input
                                    color="warning" size="lg" variant="outlined" type="number"
                                    placeholder="Height (cm)"
                                    value={heightInCm}
                                    onChange={(e) => setHeightInCm(e.target.value)}
                                />
                            </div>

                            {/* Gender */}
                            <Select
                                color="warning" size="lg" variant="outlined"
                                placeholder="Gender"
                                value={gender}
                                onChange={(_, val) => setGender(val)}
                            >
                                <Option value="male">Male</Option>
                                <Option value="female">Female</Option>
                                <Option value="other">Other</Option>
                            </Select>

                            {/* Date of Birth */}
                            <label className="field_label">Date of Birth</label>
                            <Input
                                color="warning" size="lg" variant="outlined"
                                type="date"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                            />

                            {/* Goal */}
                            <Select
                                color="warning" size="lg" variant="outlined"
                                placeholder="Fitness Goal"
                                value={goal}
                                onChange={(_, val) => setGoal(val)}
                            >
                                <Option value="lose weight">Lose Weight</Option>
                                <Option value="gain weight">Gain Weight</Option>
                                <Option value="maintain weight">Maintain Weight</Option>
                                <Option value="build muscle">Build Muscle</Option>
                                <Option value="improve endurance">Improve Endurance</Option>
                            </Select>

                            {/* Activity Level */}
                            <Select
                                color="warning" size="lg" variant="outlined"
                                placeholder="Activity Level"
                                value={activityLevel}
                                onChange={(_, val) => setActivityLevel(val)}
                            >
                                <Option value="sedentary">Sedentary (little or no exercise)</Option>
                                <Option value="lightly active">Lightly Active (1–3 days/week)</Option>
                                <Option value="moderately active">Moderately Active (3–5 days/week)</Option>
                                <Option value="very active">Very Active (6–7 days/week)</Option>
                                <Option value="super active">Super Active (physical job + training)</Option>
                            </Select>

                            <button type="submit" disabled={signupLoading}>
                                {signupLoading ? "Creating account..." : "Sign Up"}
                            </button>
                        </form>

                        <p>
                            Already have an account?{" "}
                            <button type="button" onClick={() => setShowSignup(false)}>
                                Login
                            </button>
                        </p>
                    </div>
                </div>
            ) : (
                // ── LOGIN ─────────────────────────────────────────────────────
                <div className="authform">
                    <div className="left">
                        <Image src={logo} alt="logo" />
                    </div>

                    <div className="right">
                        <h1>Login to become healthy!</h1>

                        {loginError && <p className="auth_error">{loginError}</p>}

                        <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                            <Input
                                color="warning" size="lg" variant="outlined"
                                placeholder="Email" type="email"
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                            />

                            <Input
                                color="warning" size="lg" variant="outlined"
                                placeholder="Password" type="password"
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                            />

                            <button type="submit" disabled={loginLoading}>
                                {loginLoading ? "Logging in..." : "Login"}
                            </button>
                        </form>

                        <p>
                            Don&apos;t have an account?{" "}
                            <button type="button" onClick={() => setShowSignup(true)}>
                                Sign Up
                            </button>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AuthPopup;
