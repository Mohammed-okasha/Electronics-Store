//? Start Icon
import { FaStar } from "react-icons/fa";
//? clients images
import clientImg_1 from "../images/About_tes.jpg";
import clientImg_2 from "../images/About_tes1.jpg";
import clientImg_3 from "../images/About_tes2.jpg";
import clientImg_4 from "../images/About_tes.jpg";
//!================================================
export const testimonials = [
    {
        title: "testimonial title",
        content: "Vivamus quis mi. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Vivamus euismod mauris.",
        rateing: [
            <FaStar  fontSize="15px"/>,
            <FaStar  fontSize="15px"/>,
            <FaStar  fontSize="15px"/>,
            <FaStar  fontSize="15px"/>,
            <FaStar  fontSize="15px"/>
        ],
        client: {
            image: clientImg_1,
            name: "mohammed",
            job: "frontend developer"
        }
    },
    {
        title: "testimonial title",
        content: "Vivamus quis mi. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Vivamus euismod mauris.",
        rateing: [
            <FaStar  fontSize="15px"/>,
            <FaStar  fontSize="15px"/>,
            <FaStar  fontSize="15px"/>,
            <FaStar  fontSize="15px"/>,
            <FaStar  fontSize="15px"/>
        ],
        client: {
            image: clientImg_2,
            name: "nada",
            job: "designer"
        }
    },
    {
        title: "testimonial title",
        content: "Vivamus quis mi. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Vivamus euismod mauris.",
        rateing: [
            <FaStar  fontSize="15px"/>,
            <FaStar  fontSize="15px"/>,
            <FaStar  fontSize="15px"/>,
            <FaStar  fontSize="15px"/>,
            <FaStar  fontSize="15px"/>
        ],
        client: {
            image: clientImg_3,
            name: "amr",
            job: "digital marketing"
        },
    },
    {
        title: "testimonial title",
        content: "Vivamus quis mi. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Vivamus euismod mauris.",
        rateing: [
            <FaStar  fontSize="15px"/>,
            <FaStar  fontSize="15px"/>,
            <FaStar  fontSize="15px"/>,
            <FaStar  fontSize="15px"/>,
            <FaStar  fontSize="15px"/>
        ],
        client: {
            image: clientImg_4,
            name: "eslam",
            job: "graphic design"
        },
    },
];