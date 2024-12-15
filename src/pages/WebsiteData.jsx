import { GrServices } from "react-icons/gr";
import homecover from "../assets/home/themis_home.svg";
import datacover from "../assets/datamanagement/datacover.svg";
import coursecover from "../assets/course/coursecover.jpg";
import drone from "../assets/drone&electronics/dronecover.svg";
import lawcover from "../assets/law/lawcover1.svg";
import { FaUserGraduate } from "react-icons/fa";
import { BsDatabaseCheck } from "react-icons/bs";
import { GoLaw } from "react-icons/go";
import { GiDeliveryDrone } from "react-icons/gi";
import { ScrollToBehavior, navigateToPageAndScroll } from "../helper";

export const heroSectionDetails = [
  {
    id: 10,
    title:
      "Aviation-based software: Streamline your aircraft maintenance process",
    text: "Our all-in-one platform simplifies aircraft maintenance tracking, parts logistics, and check planning.",
    buttonText: "Schedule a demo",
    image: homecover,
    onClick: () => ScrollToBehavior("demoform"),
  },
  {
    id: 11,
    title:
      "Aviation Based Courses: Take flight with our aviation courses and training services",
    text: "Take flight with our aviation courses and training services: Want to pursue a career in aviation? Our platform offers a wide range of courses and training services to help you achieve your dreams.",
    buttonText: "Request quotation",
    image: coursecover,
    onClick: () => navigateToPageAndScroll("courses", "courseForm"),
  },
  {
    id: 13,
    title:
      "Aviation law is the branch of law that concerns flight, air travel, and associated legal and business concerns.",
    text: "The most important role of the law of aviation is to provide a framework that keeps the aviation industry safe, fair, and efficient.",
    buttonText: "Send a Query",
    image: lawcover,
    onClick: () => navigateToPageAndScroll("law-practices", "query"),
  },
  {
    id: 12,
    title: "Aviation Data Management: Streamline your aviation data management",
    text: "Streamline your aviation data management: Our platform automates cyber security, provides analytics, and offers a comprehensive aviation statistics database.",
    buttonText: "Send a Query",
    image: datacover,
    onClick: () => navigateToPageAndScroll("data-management", "query"),
  },
  {
    id: 14,
    title: "Aviation Electronics & Drone Technology.",
    text: "Elevate your aviation experience with Aeroplus+: Discover the latest aviation electronics and drone technology to enhance your flying experience.",
    buttonText: "View Catalog",
    image: drone,
    onClick: () => {
      window.location.href = "/catalog";
    },
  },
];

export const navigatingCardDetails = [
  {
    id: 10,
    icon: <GrServices size={34} />,
    title: "CAMO Services",
    text: "Our all-in-one platform simplifies aircraft maintenance tracking, parts logistics, and check planning.",
  },
  {
    id: 11,
    icon: <FaUserGraduate size={34} />,
    title: "Aviation Courses",
    text: "Our platform offers a wide range of courses and training services to help you achieve your dreams",
  },
  {
    id: 13,
    icon: <BsDatabaseCheck size={34} />,
    title: "Data management",
    text: "Our platform automates cyber security, provides analytics, and offers a comprehensive aviation statistics database.",
  },
  {
    id: 12,
    icon: <GoLaw size={34} />,
    title: "Law practices",
    text: "Providing specialised legal and compliance services for the aviation industry.",
  },

  {
    id: 14,
    icon: <GiDeliveryDrone size={34} />,
    title: "Electronics & drone",
    text: "Discover the latest aviation electronics and drone technology to enhance your flying experience.",
  },
];
