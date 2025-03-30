import React from 'react'
import Title from './Title'
import { GoDotFill } from "react-icons/go";
import Link from "next/link"

export default function Popular() {


    const articles = [
  {
    "title": "How to Reset Your Password",
    "description": "If you’re unable to access your account due to a forgotten password, follow these steps to reset it securely. We’ll guide you through the process to regain access and ensure your new password is strong and safe.",
    "topics": [
      "Reset via email",
      "Password strength tips",
      "Two-factor authentication"
    ]
  },
  {
    "title": "How to Contact Support",
    "description": "Need assistance with your account or a technical issue? Discover the different ways to get in touch with our support team, including live chat, email, and phone support.",
    "topics": [
      "Live chat support",
      "Email support",
      "Phone support"
    ]
  },
  {
    "title": "Troubleshooting Login Issues",
    "description": "Struggling to log in? We’ll help you identify common login problems and walk you through potential solutions, such as resetting your password or clearing your browser cache.",
    "topics": [
      "Incorrect password",
      "Resetting your password",
      "Clearing browser cache"
    ]
  },
  {
    "title": "Updating Your Account Information",
    "description": "Learn how to update your personal details, such as your email address, phone number, and profile settings, to keep your account information up to date.",
    "topics": [
      "Changing email address",
      "Updating phone number",
      "Managing personal details"
    ]
  },
  {
    "title": "Setting Up Two-Factor Authentication (2FA)",
    "description": "Enhance your account security by enabling two-factor authentication. This guide walks you through the setup process and explains how 2FA protects your account.",
    "topics": [
      "Enabling 2FA",
      "Using authentication apps",
      "Backup codes"
    ]
  },
  {
    "title": "Canceling or Modifying a Subscription",
    "description": "If you need to update, pause, or cancel your subscription, follow our step-by-step instructions to manage your billing preferences easily.",
    "topics": [
      "Canceling a plan",
      "Upgrading or downgrading",
      "Billing cycle changes"
    ]
  },
  {
    "title": "How to Request a Refund",
    "description": "Find out how to request a refund for an accidental purchase, incorrect billing, or other eligible cases. We’ll explain the process and any applicable refund policies.",
    "topics": [
      "Refund eligibility",
      "Submitting a refund request",
      "Processing time"
    ]
  },
  {
    "title": "Fixing Payment Issues",
    "description": "Having trouble making a payment? Learn how to resolve declined transactions, update payment methods, and troubleshoot common billing errors.",
    "topics": [
      "Updating payment methods",
      "Declined transactions",
      "Billing troubleshooting"
    ]
  },
  {
    "title": "Recovering a Hacked Account",
    "description": "If you suspect your account has been compromised, take immediate action to secure it. Follow these steps to recover access and protect your personal information.",
    "topics": [
      "Recognizing account breaches",
      "Resetting passwords",
      "Enabling security features"
    ]
  },
  {
    "title": "Downloading and Installing Our App",
    "description": "Get started with our mobile or desktop app by following this guide on downloading, installing, and setting up your account for the best experience.",
    "topics": [
      "Downloading the app",
      "Installation steps",
      "Setting up your account"
    ]
  }
]

  return (
    <div>
                      <div className="mx-4">
          <Title title="Popular Articles"/>
        </div>
                
        {
            articles.map((art, i) => {
                return(
                    <div key={i} className="container p-4">
                    <div className="text-2xl font-semibold text-blue-500">
                          <Link href="/">{art.title}</Link>  
                        </div>
                        <div className="my-1 ">
                            {art.description}
                        </div>
                        <div className="text-sm text-zinc-700 my-3 flex content-center items-center">
                        {art.topics[0]} <span className='mx-1'><GoDotFill/></span>
                        {art.topics[1]} <span className='mx-1'><GoDotFill/></span>
                        {art.topics[2]} 
                        </div>
                    
                    </div>
                )
            })
        }
    </div>
  )
}
