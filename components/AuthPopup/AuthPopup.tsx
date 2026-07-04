"use client"
import React, { useState } from 'react'
import './AuthPopup.css'
import logo from '../../app/assets/logo1.png';
import Image from 'next/image'
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { AiOutlineClose } from 'react-icons/ai'
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { toast } from 'react-toastify';

interface AuthPopupProps {
    setShowpopup: React.Dispatch<React.SetStateAction<boolean>>;
    forceOpen?: boolean;
    onAuthSuccess?: () => void;
}


interface SignupFormData {
    name: string,
    email: string,
    password: string,
    weightInKg: number,
    heightInCm: number,
    goal: string,
    gender: string,
    dob: Date,
    activityLevel: string
}


type AuthView = 'login' | 'signup' | 'verify' | 'forgot' | 'reset';

const passwordRuleMessage =
    'Password must be at least 8 characters and include uppercase, lowercase, number, and special character';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;

const AuthPopup: React.FC<AuthPopupProps> = ({ setShowpopup, forceOpen = false, onAuthSuccess }) => {
    const [currentView, setCurrentView] = React.useState<AuthView>('login')
    const [signupformData, setSignupFormData] = useState<SignupFormData>({
        name: '',
        email: '',
        password: '',
        weightInKg: 0.0,
        heightInCm: 0.0,
        goal: '',
        gender: '',
        dob: new Date(),
        activityLevel: ''
    })
    const [loginformData, setLoginFormData] = useState({
        email: '',
        password: '',
    })
    const [verificationEmail, setVerificationEmail] = useState('')
    const [verificationOtp, setVerificationOtp] = useState('')
    const [forgotEmail, setForgotEmail] = useState('')
    const [resetOtp, setResetOtp] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const closePopup = () => {
        if (forceOpen) {
            return;
        }
        setShowpopup(false)
    }

    const handleAuthSuccess = () => {
        onAuthSuccess?.();
        setShowpopup(false);
    }

    const handleLogin = () => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginformData),
            credentials: 'include'
        })
        .then(res => res.json())
            .then(data => {
                if (data.ok) {
                    toast.success(data.message)
                    handleAuthSuccess()
                }
                else {
                    if (data?.data?.requiresVerification || data?.message?.toLowerCase()?.includes('not verified')) {
                        setVerificationEmail(loginformData.email)
                        setCurrentView('verify')
                    }
                    toast.error(data.message)
                }
            }).catch(err => {
                console.log(err)
            })
    }
    const handleSignup = () => {
        if (!passwordRegex.test(signupformData.password)) {
            toast.error(passwordRuleMessage);
            return;
        }

        fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signupformData),
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                if (data.ok) {
                    toast.success(data.message)
                    setVerificationEmail(signupformData.email)
                    setCurrentView('verify')
                }
                else {
                    toast.error(data.message)
                }
            }).catch(err => {
                console.log(err)
            })
    }

    const handleVerifyAccount = () => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/auth/verify-account', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: verificationEmail, otp: verificationOtp }),
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                if (data.ok) {
                    toast.success(data.message)
                    setCurrentView('login')
                } else {
                    toast.error(data.message)
                }
            })
            .catch(err => console.log(err))
    }

    const handleResendVerificationOtp = () => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/auth/resend-verification-otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: verificationEmail }),
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                if (data.ok) {
                    toast.success(data.message)
                } else {
                    toast.error(data.message)
                }
            })
            .catch(err => console.log(err))
    }

    const handleForgotPassword = () => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/auth/forgot-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: forgotEmail }),
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                if (data.ok) {
                    toast.success(data.message)
                    setVerificationEmail(forgotEmail)
                    setCurrentView('reset')
                } else {
                    toast.error(data.message)
                }
            })
            .catch(err => console.log(err))
    }

    const handleResetPassword = () => {
        if (!passwordRegex.test(newPassword)) {
            toast.error(passwordRuleMessage);
            return;
        }

        fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/auth/reset-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: verificationEmail, otp: resetOtp, newPassword }),
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                if (data.ok) {
                    toast.success(data.message)
                    setCurrentView('login')
                } else {
                    toast.error(data.message)
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='popup'>
            {!forceOpen && (
                <button className='close' onClick={closePopup}>
                    <AiOutlineClose />
                </button>
            )}
            {
                currentView === 'signup' ? (
                    <div className='authform'>

                        <div className='left'>
                            <Image src={logo} alt="Logo" />
                        </div>
                        <div className='right'>
                            <h1>Create your account</h1>
                            <form action="">
                                <Input
                                    color="warning"
                                    placeholder="name"
                                    size="lg"
                                    variant="solid"
                                    onChange={(e) => {
                                        setSignupFormData({
                                            ...signupformData,
                                            name: e.target.value
                                        })
                                    }}
                                />
                                <Input
                                    color="warning"
                                    placeholder="email"
                                    size="lg"
                                    variant="solid"

                                    onChange={(e) => {
                                        setSignupFormData({
                                            ...signupformData,
                                            email: e.target.value
                                        })
                                    }}
                                />
                                <Input
                                    color="warning"
                                    placeholder="password"
                                    size="lg"
                                    variant="solid"
                                    type='password'

                                    onChange={(e) => {
                                        setSignupFormData({
                                            ...signupformData,
                                            password: e.target.value
                                        })
                                    }}
                                />


                                <Input color="warning" size="lg" variant="solid" type="number" placeholder='Weight in kg'
                                    onChange={(e) => {
                                        setSignupFormData({
                                            ...signupformData,
                                            weightInKg: parseFloat(e.target.value)
                                        })
                                    }}
                                />

                                <Select
                                    color="warning"
                                    placeholder="Activity Level"
                                    size="lg"
                                    variant="solid"

                                    onChange={(
                                        event: React.SyntheticEvent | null,
                                        newValue: string | null,
                                    ) => {
                                        setSignupFormData({
                                            ...signupformData,
                                            activityLevel: newValue?.toString() || ''
                                        })
                                    }}
                                >
                                    <Option value="sedentary">Sedentary</Option>
                                    <Option value="light">Light</Option>
                                    <Option value="moderate">Moderate</Option>
                                    <Option value="active">Active</Option>
                                    <Option value="veryActive">Very Active</Option>
                                </Select>

                                <Select
                                    color="warning"
                                    placeholder="Goal"
                                    size="lg"
                                    variant="solid"

                                    onChange={(
                                        event: React.SyntheticEvent | null,
                                        newValue: string | null,
                                    ) => {
                                        setSignupFormData({
                                            ...signupformData,
                                            goal: newValue?.toString() || ''
                                        })
                                    }}
                                >
                                    <Option value="weightLoss">Lose</Option>
                                    <Option value="weightMaintain">Maintain</Option>
                                    <Option value="weightGain">Gain</Option>
                                </Select>

                                <Select
                                    color="warning"
                                    placeholder="Gender"
                                    size="lg"
                                    variant="solid"

                                    onChange={(
                                        event: React.SyntheticEvent | null,
                                        newValue: string | null,
                                    ) => {
                                        setSignupFormData({
                                            ...signupformData,
                                            gender: newValue?.toString() || ''
                                        })
                                    }}
                                >
                                    <Option value="male">Male</Option>
                                    <Option value="female">Female</Option>
                                    <Option value="other">Other</Option>
                                </Select>

                                <label htmlFor="">Height</label>


                                <Input color="warning" size="lg" variant="solid" type="number" placeholder='cm'
                                    onChange={(e) => {
                                        setSignupFormData({
                                            ...signupformData,
                                            heightInCm: parseFloat(e.target.value)
                                        })
                                    }}
                                />


                                <label htmlFor="">Date of Birth</label>
                                <LocalizationProvider dateAdapter={AdapterDayjs}

                                >
                                    <DesktopDatePicker defaultValue={dayjs(new Date())}
                                        sx={{
                                            backgroundColor: 'white',
                                        }}

                                        onChange={(newValue: Dayjs | null) => {
                                            setSignupFormData({
                                                ...signupformData,
                                                dob: newValue ? newValue.toDate() : new Date()
                                            })
                                        }}
                                    />
                                </LocalizationProvider>

                                <button
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handleSignup()
                                    }}
                                >Signup</button>
                            </form>
                            <p>Already have an account?  <button onClick={() => {
                                setCurrentView('login')
                            }}>Login</button></p>
                        </div>

                    </div>
                ) : currentView === 'verify' ? (
                    <div className='authform'>
                        <div className='left'>
                            <Image src={logo} alt="Logo" />
                        </div>
                        <div className='right'>
                            <h1>Verify your account</h1>
                            <form action="">
                                <Input
                                    color="warning"
                                    placeholder="email"
                                    size="lg"
                                    variant="solid"
                                    value={verificationEmail}
                                    onChange={(e) => setVerificationEmail(e.target.value)}
                                />
                                <Input
                                    color="warning"
                                    placeholder="OTP"
                                    size="lg"
                                    variant="solid"
                                    value={verificationOtp}
                                    onChange={(e) => setVerificationOtp(e.target.value)}
                                />
                                <button
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handleVerifyAccount()
                                    }}
                                >Verify Account</button>
                            </form>
                            <p>
                                Didn&apos;t receive OTP? <button onClick={handleResendVerificationOtp}>Resend OTP</button>
                            </p>
                            <p>
                                Back to <button onClick={() => setCurrentView('login')}>Login</button>
                            </p>
                        </div>
                    </div>
                ) : currentView === 'forgot' ? (
                    <div className='authform'>
                        <div className='left'>
                            <Image src={logo} alt="Logo" />
                        </div>
                        <div className='right'>
                            <h1>Forgot Password</h1>
                            <form action="">
                                <Input
                                    color="warning"
                                    placeholder="email"
                                    size="lg"
                                    variant="solid"
                                    value={forgotEmail}
                                    onChange={(e) => setForgotEmail(e.target.value)}
                                />
                                <button
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handleForgotPassword()
                                    }}
                                >Send Reset OTP</button>
                            </form>
                            <p>
                                Back to <button onClick={() => setCurrentView('login')}>Login</button>
                            </p>
                        </div>
                    </div>
                ) : currentView === 'reset' ? (
                    <div className='authform'>
                        <div className='left'>
                            <Image src={logo} alt="Logo" />
                        </div>
                        <div className='right'>
                            <h1>Reset Password</h1>
                            <form action="">
                                <Input
                                    color="warning"
                                    placeholder="email"
                                    size="lg"
                                    variant="solid"
                                    value={verificationEmail}
                                    onChange={(e) => setVerificationEmail(e.target.value)}
                                />
                                <Input
                                    color="warning"
                                    placeholder="reset OTP"
                                    size="lg"
                                    variant="solid"
                                    value={resetOtp}
                                    onChange={(e) => setResetOtp(e.target.value)}
                                />
                                <Input
                                    color="warning"
                                    placeholder="new password"
                                    size="lg"
                                    variant="solid"
                                    type='password'
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                                <button
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handleResetPassword()
                                    }}
                                >Reset Password</button>
                            </form>
                            <p>
                                Back to <button onClick={() => setCurrentView('login')}>Login</button>
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className='authform'>
                        <div className='left'>
                            <Image src={logo} alt="Logo" />
                        </div>
                        <div className='right'>
                            <h1>Login to continue</h1>
                            <form action="">
                                <Input
                                    color="warning"
                                    placeholder="email"
                                    size="lg"
                                    variant="solid"
                                    onChange={(e) => {
                                        setLoginFormData({
                                            ...loginformData,
                                            email: e.target.value
                                        })
                                    }}
                                />

                                <Input
                                    color="warning"
                                    placeholder="password"
                                    size="lg"
                                    variant="solid"
                                    type='password'

                                    onChange={(e) => {
                                        setLoginFormData({
                                            ...loginformData,
                                            password: e.target.value
                                        })
                                    }}
                                />
                                <button
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handleLogin()
                                    }}
                                >Login</button>
                            </form>
                            <p>Forgot password? <button onClick={() => {
                                setForgotEmail(loginformData.email)
                                setCurrentView('forgot')
                            }}>Reset</button></p>
                            <p>Don&apos;t have an account?  <button onClick={() => {
                                setCurrentView('signup')
                            }}>Signup</button></p>
                            <p className="adminLoginRow">
                                <button
                                    type="button"
                                    className="adminLoginBtn"
                                    onClick={() => { window.location.href = '/admin/login' }}
                                >
                                    Admin
                                </button>
                            </p>
                        </div>

                    </div>
                )
            }
        </div>
    )
}

export default AuthPopup