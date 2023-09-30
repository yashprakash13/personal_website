import React from "react"
import SmallArrow from "../assets/SmallArrow"
import EllipsisHorizontal from "../assets/EllipsisHorizontal"
import LinkSingle from "../components/LinkSingle"
import MediumArrow from "../assets/MediumArrow"

const HomePage = () => {
  return (
    <div className="flex flex-col gap-20 md:gap-32 my-5 items-start p-3">
      <div className=" md:w-full flex gap-16 justify-between items-center text-lg font-bitter text-[#8b8a8a] ">
        <div className="flex flex-col items-start">
          {/* left side */}
          <a
            className=" hover:text-black"
            target="_blank"
            href="https://yashprakash.com"
          >
            Yash Prakash
          </a>
          <a
            className="hover:underline hover:text-black hidden md:inline-flex items-center gap-1"
            target="_blank"
            href="mailto:yash@yashprakash.com"
          >
            email
          </a>
          <a
            className="hover:underline hover:text-black inline-flex md:hidden items-center gap-1"
            target="_blank"
            href="mailto:yash@yashprakash.com"
          >
            <SmallArrow />
            contact
          </a>
        </div>
        <div className="md:flex gap-11 hidden">
          {/* right side */}
          <div className="flex flex-col items-start">
            <a
              className="hover:underline hover:text-black inline-flex items-center gap-1"
              target="_blank"
              href="https://twitter.com/csandyash"
            >
              <SmallArrow />
              twitter
            </a>
            <a
              className="hover:underline hover:text-black inline-flex items-center gap-1"
              target="_blank"
              href="https://linkedin.com/in/yashprakash13"
            >
              <SmallArrow />
              linkedin
            </a>
          </div>
          <div className="flex flex-col items-start">
            <a
              className="hover:underline hover:text-black inline-flex items-center gap-1"
              target="_blank"
              href="https://ipom.medium.com"
            >
              <SmallArrow />
              blog
            </a>
            <a
              className="hover:underline hover:text-black inline-flex items-center gap-1"
              target="_blank"
              href="https://codecast.substack.com"
            >
              <SmallArrow />
              codecast
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-11">
        <div className="flex flex-wrap gap-5 justify-start items-center">
          <LinkSingle text={"Product Designer"} />
          <LinkSingle text={"Software Engineer"} />
          <LinkSingle text={"Technical Writer"} />
        </div>
        <div className="font-bold text-4xl md:text-5xl lg:text-7xl font-alegreya md:leading-[1.25] lg:leading-[1.25]">
          Yash is a full-stack software engineer and writer blending code,
          content and creativity.
        </div>
        <div className="text-xl md:text-2xl lg:text-4xl font-bitter text-[#7d7c7c] md:leading[1.25] lg:leading-[1.3]">
          I love software. Love building it, talking about it, and writing about
          it. <br /> <br /> I help startups and digital agencies find their
          creative expression and bring their products and services under the
          curious eyes of their enthusiastic audience.
          <br />
          <br />
        </div>
        <div className="text-lg md:text-xl lg:text-2xl font-bitter flex flex-col lg:flex-row lg:items-center gap-7">
          <span className="opacity-50 uppercase tracking-wide">
            Got a project?
          </span>

          <a
            href="https://www.accelerationsuite.com/"
            target="_blank"
            className="relative w-fit font-bitter inline-flex gap-3 items-center px-4 py-2 md:px-7 md:py-3 lg:px-9 lg:py-4 border-2 border-black cursor-pointer transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-700 before:content-[''] hover:text-white before:hover:scale-x-100"
          >
            Let's work together <MediumArrow />
          </a>
        </div>
      </div>
      <div className="flex justify-between items-center font-bitter w-full text-[#8b8a8a] text-sm">
        <a
          class=" sm:text-center hover:underline hover:text-black"
          href="https://yashprakash.com/"
        >
          © 2023{" "}
        </a>
        <div className="flex gap-11">
          {/* right side */}
          <div className="flex flex-col items-start">
            <a
              className="hover:underline hover:text-black inline-flex items-center gap-1"
              target="_blank"
              href="https://twitter.com/csandyash"
            >
              <SmallArrow />
              twitter
            </a>
            <a
              className="hover:underline hover:text-black inline-flex items-center gap-1"
              target="_blank"
              href="https://linkedin.com/in/yashprakash13"
            >
              <SmallArrow />
              linkedin
            </a>
          </div>
          <div className="flex flex-col items-start">
            <a
              className="hover:underline hover:text-black inline-flex items-center gap-1"
              target="_blank"
              href="https://ipom.medium.com"
            >
              <SmallArrow />
              blog
            </a>
            <a
              className="hover:underline hover:text-black inline-flex items-center gap-1"
              target="_blank"
              href="https://codecast.substack.com"
            >
              <SmallArrow />
              newsletter
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
