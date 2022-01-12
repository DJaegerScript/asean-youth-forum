import React from "react"
import { v4 as uuid } from "uuid"

export const IssueNearUs = () => {
  const issues = [
    "issue1.jpg",
    "issue2.jpg",
    "issue3.jpg",
    "issue4.jpg",
    "issue5.jpg",
    "issue6.jpg",
    "issue7.jpg",
    "issue8.jpg",
    "issue7.jpg",
    "issue8.jpg",
    "issue7.jpg",
  ]

  return (
    <div className="w-full h-full py-8">
      <div className="flex gap-4 justify-center items-center">
        {issues.map((issue, index) => (
          <img
            key={uuid()}
            alt="issue"
            src={issue}
            className={`h-full ${index % 2 !== 0 ? "mt-20" : ""}`}
          />
        ))}
      </div>
    </div>
  )
}
