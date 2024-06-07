import { useState } from "react";
import axios from "axios";

import MailIcon from "@mui/icons-material/Mail";

function Enquiry() {
  let enquiryFail = false;
  let errorMessage;
  const sendEmail = async () => {
    try {
      await axios.post("/emails", {
        fromEmail: userEnquiry.fromEmail,
        toEmail: userEnquiry.toEmail,
        subject: userEnquiry.subject,
        content: userEnquiry.content,
      });
    } catch (err) {
      console.log(`Failed to make request ${err.message}`);
      errorMessage = err.message;
    }
  };

  const [userEnquiry, setUserEnquiry] = useState({
    name: "",
    fromEmail: "",
    toEmail: "notslrac@gmail.com",
    subject: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setUserEnquiry((preValue) => {
      if (name === "fromEmail") {
        return {
          name: preValue.name,
          fromEmail: value,
          toEmail: "notslrac@gmail.com",
          subject: preValue.subject,
          content: preValue.content,
        };
      } else if (name === "subject") {
        return {
          name: preValue.name,
          fromEmail: preValue.fromEmail,
          toEmail: "notslrac@gmail.com",
          subject: value,
          content: preValue.content,
        };
      } else if (name === "content") {
        return {
          name: preValue.name,
          fromEmail: preValue.fromEmail,
          toEmail: "notslrac@gmail.com",
          subject: preValue.subject,
          content: value,
        };
      } else if (name === "name") {
        return {
          name: value,
          fromEmail: preValue.fromEmail,
          toEmail: "notslrac@gmail.com",
          subject: preValue.subject,
          content: preValue.content,
        };
      }
    });
  }

  // const [isExpanded, setIsExpanded] = useState(false);
  // function expand() {
  //   setIsExpanded(true);
  // }

  const [isSubmitted, setIsSubmitted] = useState(false);
  function submitted() {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 500);
  }

  // OTHER USE OF FORM (EXPANDING THE FORM FROM TEXTAREA)
  // function inputs() {
  //   return (
  //     <>
  //       <input
  //         onChange={handleChange}
  //         value={userEnquiry.name}
  //         name="name"
  //         placeholder="Enter Name"
  //         required
  //       />
  //       <input
  //         onChange={handleChange}
  //         value={userEnquiry.fromEmail}
  //         name="name"
  //         placeholder="Enter Name"
  //         required
  //       />
  //       <input
  //         onChange={handleChange}
  //         value={userEnquiry.fromEmail}
  //         name="fromEmail"
  //         placeholder="Your email"
  //         required
  //       />
  //       <input
  //         onChange={handleChange}
  //         value={userEnquiry.subject}
  //         name="subject"
  //         placeholder="Subject"
  //         required
  //       />
  //     </>
  //   );
  // }

  //return (
  //<>
  //   {isSubmitted && <p>{enquiryFail ? "❌" + enquiryFail : "✅Submitted"}</p>}
  //   <form
  //     id="askUs"
  //     className="enquireForm"
  //     style={{ height: isExpanded ? "420px" : "220px" }}
  //   >
  //     {isExpanded && inputs()}

  //     <textarea
  //       onClick={expand}
  //       onChange={handleChange}
  //       name="content"
  //       value={userEnquiry.content}
  //       placeholder={isExpanded ? "Your message..." : "Click to expand"}
  //       rows={isExpanded ? 10 : 4}
  //       required
  //     />
  //     {isExpanded ? (
  //       <button
  //         className="btn"
  //         type="submit"
  //         onClick={(e) => {
  //           console.log("SUBMITTED");
  //           sendEmail();
  //           submitted();
  //           setUserEnquiry({
  //             fromEmail: "",
  //             toEmail: "notslrac@gmail.com",
  //             subject: "",
  //             content: "",
  //           });
  //           e.preventDefault();
  //         }}
  //       >
  //         Send Message <MailIcon />
  //       </button>
  //     ) : null}
  //   </form>
  // </>
  //);

  return (
    <>
      {isSubmitted ? (
        <div className="submitted">
          <p>{enquiryFail ? "❌" + errorMessage : "✅Submitted"}</p>
        </div>
      ) : null}

      <form id="askUs" className="enquireForm">
        <h2>Leave us a message</h2>
        <input
          onChange={handleChange}
          value={userEnquiry.name}
          name="name"
          placeholder="Enter Name"
          required
        />
        <input
          onChange={handleChange}
          value={userEnquiry.fromEmail}
          name="fromEmail"
          placeholder="Enter email"
          required
        />
        <input
          onChange={handleChange}
          value={userEnquiry.subject}
          name="subject"
          placeholder="Subject"
          required
        />
        <textarea
          onChange={handleChange}
          name="content"
          value={userEnquiry.content}
          placeholder="Your message..."
          rows="10"
          required
        />
        <button
          className="btn"
          type="submit"
          onClick={(e) => {
            console.log("SUBMITTED");
            sendEmail();
            submitted();
            setUserEnquiry({
              name: "",
              fromEmail: "",
              toEmail: "notslrac@gmail.com",
              subject: "",
              content: "",
            });
            e.preventDefault();
          }}
        >
          Send Message <MailIcon />
        </button>
      </form>
    </>
  );
}

export default Enquiry;
