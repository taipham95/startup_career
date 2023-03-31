import React, { useContext } from "react";
import { CareersContext } from "../../Context/CareersContext";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
function JobDetail() {
  const param = useParams();
  const { jobsData } = useContext(CareersContext);
  console.log(jobsData);
  const joblist2 = jobsData.find((item) => item._id == param.id);
  console.log(joblist2);
  return (
    <div>
      {jobsData ? (
        <main class="flex-1 flex justify-center flex-col w-full items-center relative">
          <header
            class="md:bg-[url('https://skymavis.com/_app/immutable/assets/axie-concept-f5e52a79.png')] 
          max-md:bg-[url('https://skymavis.com/_app/immutable/assets/ImageBackgroundJobDetailMobile-2dbabf27.png')]
          page-header flex flex-col items-center text-center p-[64px_20px] xl:p-[95px_28px_95px] 2xl:p-[95px_500px_95px] 3xl:p-[95px_600px_95px] bg-no-repeat bg-cover bg-center transition-all w-full"
          >
            <div class=" 	flex gap-2">
              {joblist2.tags.map((tag) => {
                return (
                  <p class="inline-block whitespace-nowrap rounded-[0.35rem] bg-sky-500 px-[0.8rem] py-[0.5rem] text-center align-baseline text-[0.75em] font-bold leading-none text-white">
                    {tag}
                  </p>
                );
              })}
            </div>
            <div class="text-4xl xl:text-5xl font-bold mb-5 mt-5">
              {joblist2.title}
            </div>
            {joblist2.location}
          </header>
          <div class="flex flex-col text-left  max-w-[856px] p-5 xl:p-0">
            <div class="text-[#1D273D] detail-job pt-10 xl:pt-[79px] ">
              <h1 class="text-2xl font-medium">Descriptions</h1>
              <p>
                <br />
              </p>
              <p>
                <strong>About Sky Mavis</strong>
              </p>
              <p class="p-1">{joblist2.descriptions[0].description}</p>

              <p>
                <strong>About the Role</strong>
              </p>
              <p class="p-1">{joblist2.descriptions[1].description}</p>

              <h1 class="text-2xl font-medium mt-3">Requirements</h1>
              <ul class="list-disc pl-4">
                {joblist2.requirements.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </div>
            <div>
              <h1 class="text-2xl font-medium mt-3 mb-2">Benefits</h1>
              <p class="flex gap-x-2 my-5">
                <img
                  title=""
                  alt=""
                  src="https://workablehr.s3.amazonaws.com/uploads/photos/502384/2f72f193dbfde42770e682b1ea82d4ba.png"
                />
                Front row seat to one of the most exciting blockchain projects
                that is making a positive impact and changing people’s lives
                globally
              </p>
              <p class="flex gap-x-2 my-5">
                <img
                  title=""
                  alt=""
                  src="https://workablehr.s3.amazonaws.com/uploads/photos/502384/61b1a90b1ca05128690e629ca9889286.png"
                />
                A fast-paced, active, and fun working environment where
                everything revolves around games and cute beings
              </p>
              <p class="flex gap-x-2 my-5">
                <img
                  title=""
                  alt=""
                  src="https://workablehr.s3.amazonaws.com/uploads/photos/502384/8381de71a1d1047e4ae87b8cdd7e4ee1.png"
                />
                A competitive salary package that fits your skills, experiences,
                and contributions
              </p>
              <p class="flex gap-x-2 my-5">
                <img
                  title=""
                  alt=""
                  src="https://workablehr.s3.amazonaws.com/uploads/photos/502384/a2bbb1584fc2524ef396a6690494cbcc.png"
                />
                Freedom, autonomy & ownership around your work
              </p>
              <p class="flex gap-x-2 my-5">
                <img
                  title=""
                  alt=""
                  src="https://workablehr.s3.amazonaws.com/uploads/photos/502384/a6b85f947510fb861e25fd40a200cd3b.png"
                />
                Contribute to making revolutionary games
              </p>
              <p class="flex gap-x-2 my-5">
                <img
                  title=""
                  alt=""
                  src="https://workablehr.s3.amazonaws.com/uploads/photos/502384/15e95b6a59569fb890090a73ca795bbe.png"
                />
                Acquire new and unique skills as we usher in a new era of
                digital ownership
              </p>
              <p class="flex gap-x-2 mt-5">
                <img
                  title=""
                  alt=""
                  src="https://workablehr.s3.amazonaws.com/uploads/photos/502384/ed5f9482fe69d32336c62c0c7bb7150c.png"
                />
                Give yourself and your family the security you deserve
              </p>
              <div />
            </div>
          </div>
          <Link to={`/careers/${param.id}/apply`}>
            <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-full mb-[50px] mt-[30px] py-[5px] px-[54px]">
              Apply
            </button>
          </Link>
        </main>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default JobDetail;
