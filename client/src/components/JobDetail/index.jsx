import React from "react";

function JobDetail() {
  return (
    <main class="flex-1 flex flex-col w-full items-center relative">
      <header
        class="md:bg-[url('https://skymavis.com/_app/immutable/assets/axie-concept-f5e52a79.png')] 
      max-md:bg-[url('https://skymavis.com/_app/immutable/assets/ImageBackgroundJobDetailMobile-2dbabf27.png')]
      page-header flex flex-col items-center text-center p-[64px_20px] xl:p-[95px_28px_95px] 2xl:p-[95px_500px_95px] 3xl:p-[95px_600px_95px] bg-no-repeat bg-cover bg-center transition-all w-full"
      >
        <div class="bg-[#4c98ff] mb-2 px-3 py-0.5 rounded	">
          <p class="text-white text-sm">Engineer</p>
        </div>
        <div class="text-3xl font-bold mb-5">DevOps Engineer</div>
        Vietnam, Ho Chi Minh City - Full-time
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
          <p class="p-1">
            Sky Mavis, the pioneer behind the blockchain game Axie Infinity, is
            revolutionizing the virtual gaming world with innovative technology
            and infrastructure. We are committed to fostering a dynamic and
            inclusive work culture where individuals can bring their authentic
            selves to the table. As a team of entrepreneurial disruptors and
            gamers, we are driven by a shared passion for making a meaningful
            impact and embracing the challenges and critiques that come with
            being at the forefront of technological advancement.
          </p>
          <p class="p-1">
            We are at the forefront of technological innovation and we are
            moving fast. As part of our team, you’ll join a group of talented
            young people, who are making changes while having fun doing it.
          </p>
          <p>
            <strong>About the Role</strong>
          </p>
          <p class="p-1">
            Our DevOps Engineers are responsible for maintaining the robustness
            and reliability of our system to operate and scale to potentially
            millions of users. This is not a traditional role - more of a fusion
            between classic DevOps and Site Reliability Engineering.
          </p>
          <p class="p-1">
            We are operating at the bleeding edge of blockchain technology, so
            many of your prerogatives may be experiments that have never been
            conducted before. You'll need to be bright, nimble, and willing to
            innovate to succeed in this role. Your day to day might include
          </p>
          <ul class="list-disc pl-4">
            <li>
              Apply cloud (AWS, Azure, GCP) computing skills to deploy releases
              and upgrades.
            </li>
            <li>
              Apply best practices to improve the company's computing
              architecture (server monitoring, micro-services management).
            </li>
            <li>
              Implement automation tools and frameworks (CI/CD pipelines).
            </li>
            <li>
              Improve company engineering tools, procedures, and data security
            </li>
          </ul>
          <h1 class="text-2xl font-medium mt-3">Requirements</h1>
          <ul class="list-disc pl-4">
            <li>
              It would be awesome if you have a passionate curiosity about how
              the Internet fundamentally works and a strong coding ability in
              Bash, Python, or Go.
            </li>
            <li>
              You have experience working with container technologies (Docker,
              Kubernetes).
            </li>
            <li>
              You have experience setting up automation pipelines (CI/CD,
              Jenkins).
            </li>
            <li>
              You're comfortable working with cloud services (AWS, Azure, GCP).
            </li>
            <li>
              Experience with Postgres, Redis, Typescripts, Go, and Solidity
              would be highly preferable
            </li>
            <li>You learn quickly and adapt to new principles and ideas.</li>
            <li>
              You're a team player and can work closely with the rest of our
              team.
            </li>
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
            Front row seat to one of the most exciting blockchain projects that
            is making a positive impact and changing people’s lives globally
          </p>
          <p class="flex gap-x-2 my-5">
            <img
              title=""
              alt=""
              src="https://workablehr.s3.amazonaws.com/uploads/photos/502384/61b1a90b1ca05128690e629ca9889286.png"
            />
            A fast-paced, active, and fun working environment where everything
            revolves around games and cute beings
          </p>
          <p class="flex gap-x-2 my-5">
            <img
              title=""
              alt=""
              src="https://workablehr.s3.amazonaws.com/uploads/photos/502384/8381de71a1d1047e4ae87b8cdd7e4ee1.png"
            />
            A competitive salary package that fits your skills, experiences, and
            contributions
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
            Acquire new and unique skills as we usher in a new era of digital
            ownership
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
      <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-full mb-[50px] mt-[30px] py-[5px] px-[54px]">
        Apply
      </button>
    </main>
  );
}

export default JobDetail;
