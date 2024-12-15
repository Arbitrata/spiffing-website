import React, { useRef, useState } from "react";
import coursecover from "../assets/course/coursecover.jpg";
import course from "../assets/aviation course.svg";
import airworthiness from "../assets/course/airworthiness.svg";
import AircraftReliability from "../assets/course/Aircraft Reliability .svg";
import spares from "../assets/course/spares.svg";
import bgform from "../assets/course/formbg.jpg";
import course2 from "../assets/course/coursec2.jpg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Button, Iconcard, ImageCard, Input, RenderHero } from "../components";
import { GiSkills } from "react-icons/gi";
import { HiAcademicCap } from "react-icons/hi";
import { BsLadder } from "react-icons/bs";
import { HeadingLayout, ScrollToBehavior } from "../helper";
import emailjs from "@emailjs/browser";
import Select from "react-select";
import toast, { toastConfig } from "react-simple-toasts";
import { selectCustomStyles } from "./LandingPage";
import Modal from "../components/Modal";

toastConfig({ theme: "dark" });

export default function CoursesPage() {
  const selectCourseRef = useRef();
  const selectLocationRef = useRef();
  const [courseModal, setCourseModal] = useState(false);
  const form = useRef();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [sendingEmail, setSendingEmail] = useState(false);
  const [sendEmailError, setSendEmailError] = useState(false);

  const sendEmail = (e) => {
    console.log(form.current);
    e.preventDefault();
    setSendingEmail(true);
    emailjs
      .sendForm(
        "service_yuwrkqg",
        "template_lxb72sl",
        form.current,
        "CsNgLCcS_8vK-qaY1"
      )
      .then(
        (result) => {
          setSendingEmail(false);
          form.current.reset();
          selectCourseRef.current.clearValue();
          selectLocationRef.current.clearValue();
          toast("Your request has been sent successfully.");
        },
        (error) => {
          setSendEmailError(true);
          setSendingEmail(false);
          toast("Something went wrong. Try again later");
        }
      );
  };

  const courses = [
    {
      title: "Aircraft Leasing Management  ",
      description:
        "Learners will develop their awareness of the related Technical, Financial and Commercial principles and requirements necessary to ensure success on schedule and on budget transitions when an organisation pays to use an aircraft for a particular period of time.",
      image: course,
    },
    {
      title: "Aircraft Reliability Monitoring Level 1 & 2 ",
      description:
        "Learners will be able to evaluate the reliability of aircraft and aircraft items using probabilistic and statistical techniques; enhance a proactive approach to aircraft maintenance management.",
      image: AircraftReliability,
    },
    {
      title: "Continuous Airworthiness Management",
      description:
        "Enables learners to be conversant to the set of processes by which an aircraft, engine, propeller or part complies with the applicable airworthiness requirements and remains in a condition for safe operation throughout its operating life.",
      image: airworthiness,
    },

    {
      title: "Aircraft Technical Records Management",
      description:
        "With technical records being a comprehensive repository of vital information related to an aircraft or engine's maintenance history, modifications, repairs, and compliance; learners will be able to track removal/installation of Aircraft/Engines/APU/Propeller Assembly and components.",
      image: spares,
    },
  ];

  const courseOptions = courses.map((course) => ({
    value: course.title,
    label: course.title,
  }));

  const locations = ["On-premise", "Virtual Class", "eLearning"];

  const locationOptions = locations.map((location) => ({
    label: location,
    value: location,
  }));

  const openCourseModal = () => {
    setCourseModal(true);
  };

  const closeCourseModal = () => {
    setCourseModal(false);
  };

  const handleCourseDetails = (course) => {
    setSelectedCourse(course);
    openCourseModal();
  };

  return (
    <div className="w-full h-fit relative pt-[90px]">
      <AliceCarousel
        duration={700}
        startIndex={0}
        autoPlay
        fadeOutAnimation={`${true}`}
        mouseDragEnabled={true}
        playButtonEnabled={false}
        autoPlayInterval={2000}
        disableButtonsControls={true}
        infinite={true}
      >
        <RenderHero
          onClick={() => ScrollToBehavior("courseForm")}
          src={coursecover}
          alt={"Themis aviation courses"}
          title={"Take flight with our aviation courses and training services"}
          description={
            " Want to pursue a career in aviation? Our platform offers a wide  range of courses and training services to help you achieve your dreams."
          }
          buttonText={"Request Quotation"}
        />
        <RenderHero
          onClick={() => ScrollToBehavior("courseForm")}
          src={course2}
          alt={"Themis aviation courses"}
          title={"Take flight with our aviation courses and training services"}
          description={
            " Want to pursue a career in aviation? Our platform offers a wide  range of courses and training services to help you achieve your dreams."
          }
          buttonText={"Request Quotation"}
        />
      </AliceCarousel>
      <Modal
        isOpen={courseModal}
        setIsOpen={closeCourseModal}
        className={"h-fit py-10 bg-white w-full"}
      >
        {selectedCourse && (
          <div className="h-[550px] px-4 overflow-y-auto">
            <img
              src={selectedCourse.image}
              alt={selectedCourse.title}
              className="w-full max-h-[400px] object-cover h-auto"
            />
            <h2 className="text-[30px] font-lato text-darkgray font-semibold mt-12">
              {selectedCourse.title}
            </h2>
            <p className="text-textgray font-lato font-medium text-[16px] mt-6">
              {selectedCourse.description}
            </p>
          </div>
        )}
      </Modal>
      <div className="w-full h-fit bg-white lg:px-[40px] md:px-[30px] px-[20px] relative bottom-3">
        <div className="w-full h-fit max-w-screen-2xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-y-4 justify-items-center relative -top-10">
          <Iconcard
            icon={<HiAcademicCap size={60} />}
            title={"Learn from industry experts"}
            description={
              "We offer courses taught by experienced industry professionals, ensuring that you receive the highest quality education and training."
            }
          />
          <Iconcard
            icon={<GiSkills size={60} />}
            title={"Gain practical skills"}
            description={
              "Our courses focus on practical skills development, giving you hands-on experience and preparing you for real-world aviation scenarios."
            }
          />
          <Iconcard
            icon={<BsLadder size={60} />}
            title={"Enhance in career prospects"}
            description={
              "With our comprehensive training programs, you can enhance your career prospects in the aviation industry and open doors to exciting job opportunities."
            }
          />
        </div>
      </div>
      <div className="w-full h-fit bg-beigeligter py-[50px] lg:px-[70px] 2xl:px-0 md:px-[30px] px-[20px]">
        <HeadingLayout
          title={"Comprehensive courses we offer in the Field of Aviation"}
          text={
            "Our platform offers a wide range of courses and training services to help youachieve your dreams. “The aviation courses offered by Aviation Academy are top-notch."
          }
        />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-screen-2xl mx-auto justify-items-center pt-10 lg:px-8 gap-y-8">
          {courses.map((course, index) => (
            <div key={index}>
              <ImageCard
                image={course.image}
                title={course.title}
                description={course.description}
                onClick={() => handleCourseDetails(course)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-fit bg-white py-[50px] lg:px-[70px] md:px-[30px] px-[20px]">
        <HeadingLayout
          title={"Comprehensive courses we offer in the Field of Aviation"}
          text={
            "Our platform offers a wide range of courses and training services to help youachieve your dreams. “The aviation courses offered by Aviation Academy are top-notch."
          }
        />
        <div
          id="courseForm"
          className="w-full  h-fit max-w-screen-2xl mx-auto mt-[50px] grid lg:grid-cols-2 grid-cols-1 rounded-[5px] border border-border"
        >
          <img
            src={bgform}
            alt="Themis aviation"
            className="w-full lg:h-[650px] h-[450px] object-cover"
          />
          <form onSubmit={sendEmail} ref={form} className="w-full h-full py-[30px] px-[20px] lg:grid-cols-2 grid-cols-1 lg:space-y-0 space-y-12 lg:grid gap-4">
              <Input
                name={"name"}
                label={"Name"}
                placeholder={"Enter your Name"}
                style={"w-full"}
              />
              <Input
                name={"email"}
                label={"Email"}
                placeholder={"Enter Your email"}
                style={"w-full"}
              />
              <Input
                name={"telephone_number"}
                label={"Telephone Number"}
                placeholder={"eg, 25470909090909"}
                style={"w-full"}
              />
              <Input
                name={"company"}
                label={"Company"}
                placeholder={"Enter Company name"}
                style={"w-full"}
              />
              <div className=" col-span-2">
                <label className="font-extrabold captalize font-lato text-darkblue text-[15px]">
                  Select Course
                </label>
                <Select
                  name="subject"
                  styles={selectCustomStyles}
                  options={courseOptions}
                  placeholder={"Select a Course"}
                  ref={selectCourseRef}
                />
              </div>
              <Input
                name={"participants"}
                label={"NO of participants"}
                placeholder={"NO of participants"}
                style={"w-full"}
              />
              <div>
                <label className="font-extrabold captalize font-lato text-darkblue text-[15px]">
                  Select Location
                </label>
                <Select
                  name={"location"}
                  styles={selectCustomStyles}
                  options={locationOptions}
                  placeholder={"Select Location"}
                  ref={selectLocationRef}
                />
              </div>
              <div className=" col-span-2">
                <Input
                  label={"Choose a start date"}
                  name={"start_date"}
                  type={"date"}
                  style={"w-full"}
                />
              </div>
              <div />
              <div className="w-full flex justify-end relative">
                <Button
                  type={"submit"}
                  buttonText={sendingEmail ? "Requesting..." : "Request a Quote"}
                  buttonStyle={"bg-darkgray text-white pl-[50px] pr-[30px]"}
                  iconPresent={true}
                />
              </div>
            </form>
        </div>
      </div>
    </div>
  );
}
