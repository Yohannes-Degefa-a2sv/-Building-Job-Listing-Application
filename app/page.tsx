// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// import { JobProps } from "../../types/jobProps";
// import Job from "../../../../public/jobs.json";

// const JobDetailClient = () => {
//   // const { id } = useParams();
//   // // const [job, setJob] = useState<Job>();
//   // // console.log(Job);
//   // const job: Job[] = job;
//   const router = useRouter();
//   const { id } = router.query;

//   const jobData: JobProps[] = Job.job_postings;
//   const job = jobData[Number(id)];
//   return (
//     <div className="px-14 flex-col justify-between  bg-white shadow-lg rounded-lg my-16 w-full">
//       <h1 className="text-3xl font-bold mb-4 text-[#25324B]">{job.title}</h1>
//       <div className="flex flex-col md:flex-row gap-14">
//         <div className="md:w-3/4 pr-4">
//           <p className="text-gray-600 mb-4">{job.description}</p>
//           <h2 className="text-2xl font-bold mb-2 text-[#25324B]">
//             Responsibilities
//           </h2>
//           <ul className="flex flex-col gap-2">
//             {job.responsibilities?.split("\n").map((responsibility, index) => (
//               <li key={index} className="flex gap-2">
//                 <img src="/tick.svg" alt="location" width={40} height={40} />
//                 <p className="text-start text-gray-600">{responsibility}</p>
//               </li>
//             ))}
//           </ul>
//           <h2 className="text-2xl font-bold mb-2 text-[#25324B]">
//             Ideal Candidate
//           </h2>
//           <div className="mb-4 text-gray-600">
//             <p>{job.idealCandidate}</p>
//           </div>
//           <h2 className="text-2xl font-bold mb-2 inline-flex gap-2 text-[#25324B]">
//             <img src="/location.svg" alt="location" width={40} height={40} />
//             When & Where
//           </h2>
//           <p className="mb-4 text-gray-600">{job.whenAndWhere}</p>
//         </div>
//         <div className="md:w-1/4 pl-4 border-l border-gray-200">
//           <h2 className="text-2xl font-bold mb-2 text-[#25324B]">About</h2>
//           <p className="flex gap-2 text-gray-600">
//             <img src="/post.svg" alt="post date" width={40} height={40} />
//             Posted On: {formatDateToCustomString(job.datePosted)}
//           </p>
//           <p className="flex gap-2 text-gray-600">
//             <img
//               src="/deadline.png"
//               alt="deadline date"
//               width={40}
//               height={40}
//             />
//             Deadline: {formatDateToCustomString(job.deadline)}
//           </p>
//           <p className="flex gap-2 text-gray-600">
//             <img src="/location.svg" alt="location" width={40} height={40} />
//             Location:{" "}
//             {Array.isArray(job.location)
//               ? job.location.join(", ")
//               : "Not provided"}
//           </p>
//           <p className="flex gap-2 text-gray-600">
//             <img src="/start.svg" alt="start date" width={40} height={40} />
//             Start Date: {formatDateToCustomString(job.startDate)}
//           </p>
//           <p className="flex gap-2 text-gray-600">
//             <img src="/end.svg" alt="end date" width={80} height={80} />
//             End Date: {formatDateToCustomString(job.endDate)}
//           </p>
//           <h2 className="text-2xl font-bold mb-2 text-[#25324B]">Categories</h2>
//           {Array.isArray(job.categories) && job.categories.length > 0 ? (
//             job.categories.map((category, index) => (
//               <p
//                 key={index}
//                 className="mb-2 text-[#FFC663] bg-[#FDF3EB] py-1 px-3 rounded-full"
//               >
//                 {category}
//               </p>
//             ))
//           ) : (
//             <p>No categories provided</p>
//           )}
//           <h2 className="text-2xl font-bold mb-2 text-[#25324B]">
//             Required Skills
//           </h2>
//           {Array.isArray(job.requiredSkills) &&
//           job.requiredSkills.length > 0 ? (
//             job.requiredSkills.map((skill, index) => (
//               <p
//                 key={index}
//                 className="mb-2 text-[#2D298E] bg-[#F8F8Fd] py-1 px-3 rounded-full"
//               >
//                 {skill}
//               </p>
//             ))
//           ) : (
//             <p>No skills required</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobDetailClient;

import React from "react";
import HomePage from "./mainpage/components/HomePage";

const page = () => {
  return (
    <div>
      <HomePage />{" "}
    </div>
  );
};

export default page;
