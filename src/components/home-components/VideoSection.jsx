import React from 'react'

const VideoSection = () => {
  return (
    <section className="flex w-full my-10 flex-wrap-reverse justify-center">
        <div className=" video-section max-w-[500px] min-w-[200px] h-full flex items-center justify-center p-20 px-5">
          <video
            poster="/videos/workspaces-poster.webp"
            autoPlay
            controls
            loop
            muted
            playsInline
            className="css-1rdhbun h-full rounded-xl"
          >
            <source
              src="https://www.udacity.com/videos/workspaces.webm"
              type="video/webm"
            />
          </video>
        </div>
        <div className="description flex w-96 items-center justify-center flex-col flex-grow bg-red px-10">
          <h1 className="heading text-3xl font-semibold mb-16">
            The HELIX Difference
          </h1>
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-2xl font-semibold">
                Prove Mastery Through Hands-On Projects
              </h1>
              <p>
                Our open-ended projects are modeled after real-world workplace
                scenarios, and require in-depth critical thinking and creative
                solutions.
              </p>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">
                Succeed with Personalized Feedback
              </h1>
              <p>
                Every project receives personalized feedback from industry
                experts, and our mentors are available to answer questions
                whenever you're feeling stuck.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default VideoSection
