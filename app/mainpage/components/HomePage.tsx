"use client";
import React, { useState } from "react";
import JobCard from "./Card";
import Link from "next/link";
import { JobProps } from "../types/jobProps";
import Job from "../../../public/jobs.json";

export default function HomePage() {
  const jobData: JobProps[] = Job.job_postings;

  return (
    <main className="min-h-screen px-20 py-10 bg-white">
      <div className="relative top-[50px] left-[50px]  w-[900px] h-[700px] bg-white">
        <div className="mb-6">
          <div className="flex justify-center items-center gap-5 my-4 w-full">
            <div>
              <h1 className="text-3xl font-bold">Opportunities</h1>
              <p className="text-gray-600">Showing 73 results</p>
            </div>
            <div className="flex items-center ml-auto">
              <span className="mr-2 text-zinc-500">Sort by:</span>
              <select className="border rounded p-1 font-bold">
                <option>Most Relevant</option>
                <option>Latest</option>
                <option>Salary</option>
                <option>Vacancy</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          {jobData.map((job, index) => (
            <ul key={index}>
              <Link
                href={`/mainpage/jobDetail/${index}`}
                key={index}
                legacyBehavior
              >
                <li>
                  <a className="my-5">
                    <JobCard
                      id={index}
                      title={job.title}
                      location={job.about.location}
                      description={job.description}
                      imageUrl={`/job${index}.png`}
                      company={job.company}
                    />
                  </a>
                </li>
              </Link>
            </ul>
          ))}
        </div>
      </div>
    </main>
  );
}
