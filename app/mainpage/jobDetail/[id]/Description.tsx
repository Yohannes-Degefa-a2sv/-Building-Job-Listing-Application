"use client";

import { useParams } from "next/navigation";
import { JobProps } from "../../types/jobProps";
import Job from "../../../../public/jobs.json";
import dateFormate from "../../types/dateFormat";

const Description = () => {
  const params = useParams();
  const index = parseInt(params.id as string);

  const jobData: JobProps[] = Job.job_postings;
  const job = jobData[index];

  if (!job) {
    return <p>There is no available job</p>;
  }

  return (
    <div className="px-6 md:px-14 py-8 bg-white shadow-lg rounded-lg my-8 w-full">
      <h1 className="text-3xl font-bold mb-6 text-[#25324B]">{job.title}</h1>
      <div className="flex flex-col md:flex-row gap-14">
        <div className="md:w-3/4 pr-4">
          <p className="text-gray-600 mb-6">{job.description}</p>
          <h2 className="text-2xl font-bold mb-4 text-[#25324B]">
            Responsibilities
          </h2>
          <ul className="space-y-2">
            {job.responsibilities?.map(
              (responsibility: string, index: number) => (
                <li key={index} className="flex gap-4 items-start">
                  <img src="/tick.svg" alt="tick" className="w-10 h-10" />
                  <p className="text-start text-gray-600">{responsibility}</p>
                </li>
              )
            )}
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#25324B]">
            Ideal Candidate
          </h2>
          <ul className="space-y-2">
            {job.ideal_candidate.traits?.map(
              (candidate: string, index: number) => (
                <li key={index} className="flex gap-4 items-start">
                  <p className="text-start text-gray-600">{candidate}</p>
                </li>
              )
            )}
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#25324B] inline-flex gap-4 items-center">
            <img src="/location.svg" alt="location" className="w-10 h-10" />
            When & Where
          </h2>
          <p className="mb-4 text-gray-600">{job.when_where}</p>
        </div>
        <div className="md:w-1/4 pl-4 border-l border-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-[#25324B]">About</h2>
          <div className="space-y-4">
            <p className="flex items-center gap-4 text-gray-600">
              <img src="/post.svg" alt="post date" className="w-10 h-10" />
              Posted On: {dateFormate(job.about.posted_on)}
            </p>
            <p className="flex items-center gap-4 text-gray-600">
              <img
                src="/deadline.png"
                alt="deadline date"
                className="w-10 h-10"
              />
              Deadline: {dateFormate(job.about.deadline)}
            </p>
            <p className="flex items-center gap-4 text-gray-600">
              <img src="/location.svg" alt="location" className="w-10 h-10" />
              Location:{" "}
              {Array.isArray(job.about.location)
                ? job.about.location.join(", ")
                : "Not provided"}
            </p>
            <p className="flex items-center gap-4 text-gray-600">
              <img src="/start.svg" alt="start date" className="w-10 h-10" />
              Start Date: {dateFormate(job.about.start_date)}
            </p>
            <p className="flex items-center gap-4 text-gray-600">
              <img src="/end.svg" alt="end date" className="w-10 h-10" />
              End Date: {dateFormate(job.about.end_date)}
            </p>
          </div>
          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#25324B]">
            Categories
          </h2>
          <div className="space-y-2">
            {Array.isArray(job.about.categories) &&
            job.about.categories.length > 0 ? (
              job.about.categories.map((category: string, index: number) => (
                <p
                  key={index}
                  className="mb-2 text-[#FFC663] bg-[#FDF3EB] py-1 px-3 rounded-full text-center"
                >
                  {category}
                </p>
              ))
            ) : (
              <p>No categories provided</p>
            )}
          </div>
          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#25324B]">
            Required Skills
          </h2>
          <div className="space-y-2">
            {Array.isArray(job.about.required_skills) &&
            job.about.required_skills.length > 0 ? (
              job.about.required_skills.map((skill: string, index: number) => (
                <p
                  key={index}
                  className="mb-2 text-[#2D298E] bg-[#F8F8Fd] py-1 px-3 rounded-full text-center"
                >
                  {skill}
                </p>
              ))
            ) : (
              <p>No skills required</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
