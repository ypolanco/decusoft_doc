import Article from "@/client/components/Article";
import Cards from "@/client/components/Cards";
import React from "react";
import Link from "next/link";
import Title from "@/client/components/Title";

export default function page() {
  const helpDeskArticles = [
    {
      id: 1,
      title: "I am seeing a null value",
      introduction: "This can indicate several things that might be affecting your data set",
      sections: [
        {
          heading: "Some problem indicators",
          content:
            "This could indicate several problems including missing data, where the currency code was not properly assigned to the record. It may also be a data entry error, where a system or user mistakenly left the field blank. Additionally, a system bug could be preventing the currency code from being populated correctly, or a mapping issue during a data migration.",
        },
        {
          heading: "Searching for empty values (this will probably a report instead of aggregation)",
          content:
            "Ready to check for null or empty values, run the below aggregation in the application shell",
          code: `
          db.employeeCompCycle.aggregate([
            {
              $match: {
              $or: [
                { employeeCurrencyCode: null },
                { employeeCurrencyCode: "" }
              ]
            }
              }
            ])`,
        },
        {
          heading: "Troubleshooting steps",
          content:
            "to troubleshoot please...",
        },
        {
          heading: "When to Contact Support",
          content:
            "If the issue persists after troubleshooting, reach out to technical support for further assistance.",
        },
      ],
    },
    {
      id: 2,
      title: "Software Installation Errors",
      introduction:
        "Follow these steps to resolve errors encountered during software installation.",
      sections: [
        {
          heading: "Checking System Requirements",
          content:
            "Ensure your system meets the minimum software requirements and has adequate storage.",
          code: `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Prompt to Text | TailGrids</title>
    <link
      rel="shortcut icon"
      href="./../assets/images/favicon.svg"
      type="image/x-icon"
    />
    <link rel="stylesheet" href="./../assets/css/tailwind.css" />

    <script defer src="./../assets/js/alpine.min.js"></script>
  </head>
</html>`,
        },
        {
          heading: "Resolving Common Errors",
          content:
            "Disable antivirus temporarily, run the installer as an administrator, and check for corrupted files.",
        },
        {
          heading: "Advanced Troubleshooting",
          content:
            "Review installation logs, ensure required dependencies are installed, and contact support if needed.",
        },
      ],
    },
    {
      id: 3,
      title: "Password Reset Assistance",
      introduction:
        "Steps to reset your password and regain access to your account.",
      sections: [
        {
          heading: "Using the Password Reset Tool",
          content:
            "Click on 'Forgot Password' on the login page and follow the prompts to reset your password.",
        },
        {
          heading: "Receiving the Reset Email",
          content:
            "Check your inbox and spam folder for the reset email. Ensure you use the correct email address.",
        },
        {
          heading: "Contacting Support",
          content:
            "If you don't receive an email, contact support for manual assistance with your password reset.",
        },
      ],
    },
  ];

  const helpDeskArticles2 = [
    {
      id: 1,
      title: "Network Connectivity Issues",
      introduction: "Learn how to troubleshoot network problems.",
      ref: "/article/1",
      sections: [
        {
          heading: "Identifying Problems",
          content: "Check other devices and verify router connectivity.",
        },
      ],
    },
    {
      id: 2,
      title: "Software Installation Errors",
      introduction: "Resolve errors during software installation.",
      ref: "/article/2",
      sections: [
        {
          heading: "Common Solutions",
          content: "Run as administrator and check system requirements.",
        },
      ],
    },
    {
      id: 3,
      title: "Learning and development",
      introduction: "Learn how to troubleshoot network problems.",
      ref: "/article/3",
      sections: [
        {
          heading: "Identifying Problems",
          content: "Check other devices and verify router connectivity.",
        },
      ],
    },
  ];

  return (
    <div>
      <Article data={helpDeskArticles} />
      <div className="bg-zinc-100 p-9">
        <Title title="Recommended Reads" />
        <Cards data={helpDeskArticles2} />
      </div>
      <footer className="bg-zinc-100 p-4 text-gray-900 mt-12 text-center">
        Need more help? Visit our{" "}
        <Link href="/" className="text-blue-600 hover:underline">
          support center
        </Link>
        .
      </footer>
    </div>
  );
}
