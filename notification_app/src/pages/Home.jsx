import { useState, useEffect } from "react";
import { Container, Pagination } from "@mui/material";

import Navbar from "../components/Navbar";
import PrioritySection from "../components/PrioritySection";
import NotificationList from "../components/NotificationList";
import FilterBar from "../components/FilterBar";
import { Log } from "../services/logger";

function Home() {
  const notifications = [
    {
      id: 1,
      title: "TCS Placement Drive",
      message: "TCS campus hiring starts tomorrow for final year students.",
      priority: "High",
      type: "Placement",
      time: "09:00 AM",
    },
    {
      id: 2,
      title: "Semester Result Published",
      message: "B.Tech 6th semester results are now available.",
      priority: "Medium",
      type: "Result",
      time: "10:30 AM",
    },
    {
      id: 3,
      title: "Hackathon Registration Open",
      message: "Register now for the annual coding hackathon.",
      priority: "Low",
      type: "Event",
      time: "11:15 AM",
    },
    {
      id: 4,
      title: "Amazon Internship Hiring",
      message: "Applications are open for SDE internship roles.",
      priority: "High",
      type: "Placement",
      time: "12:00 PM",
    },
    {
      id: 5,
      title: "Workshop on React.js",
      message: "Attend React workshop in seminar hall B.",
      priority: "Medium",
      type: "Event",
      time: "01:00 PM",
    },
    {
      id: 6,
      title: "Internal Marks Updated",
      message: "Updated internal marks are visible on portal.",
      priority: "Low",
      type: "Result",
      time: "01:30 PM",
    },
    {
      id: 7,
      title: "Infosys Placement Round",
      message: "Shortlisted students must report before 9 AM.",
      priority: "High",
      type: "Placement",
      time: "02:00 PM",
    },
    {
      id: 8,
      title: "Cultural Fest Announcement",
      message: "Registrations open for annual college fest.",
      priority: "Low",
      type: "Event",
      time: "03:00 PM",
    },
    {
      id: 9,
      title: "Exam Rechecking Portal Open",
      message: "Students can now apply for answer-sheet rechecking.",
      priority: "Medium",
      type: "Result",
      time: "03:30 PM",
    },
    {
      id: 10,
      title: "Google Hiring Challenge",
      message: "Online coding challenge scheduled this weekend.",
      priority: "High",
      type: "Placement",
      time: "04:00 PM",
    },
    {
      id: 11,
      title: "AI Workshop",
      message: "Hands-on AI workshop organized by CSE department.",
      priority: "Medium",
      type: "Event",
      time: "05:00 PM",
    },
    {
      id: 12,
      title: "Supplementary Result Released",
      message: "Supplementary examination results are live.",
      priority: "Low",
      type: "Result",
      time: "06:00 PM",
    },
  ];

  const [filter, setFilter] = useState("All");

  const [page, setPage] = useState(1);

  const limit = 6;

  useEffect(() => {
    Log("frontend", "info", "page", "home page loaded");
  }, []);

  useEffect(() => {
    setPage(1);
  }, [filter]);

  const filteredNotifications =
    filter === "All"
      ? notifications
      : notifications.filter((item) => item.type === filter);

  const priorityNotifications = filteredNotifications.filter(
    (item) => item.priority === "High",
  );

  const startIndex = (page - 1) * limit;

  const paginatedNotifications = filteredNotifications.slice(
    startIndex,
    startIndex + limit,
  );

  return (
    <>
      <Navbar />

      <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
        <FilterBar filter={filter} setFilter={setFilter} />

        <PrioritySection notifications={priorityNotifications} />

        <NotificationList notifications={paginatedNotifications} />

        <Pagination
          sx={{
            mt: 5,
            mb: 5,
            display: "flex",
            justifyContent: "center",
          }}
          count={Math.ceil(filteredNotifications.length / limit)}
          page={page}
          onChange={(e, value) => {
            setPage(value);

            Log("frontend", "info", "component", "pagination changed");
          }}
        />
      </Container>
    </>
  );
}

export default Home;
