import React, { useState } from "react";
import PaperTradingCard from "./PaperTradingCard";
const PaperTrading = () => {
  const [time, setTime] = useState("06:20:56");
  const [nifty, setNifty] = useState("19,711");
  const [bankNifty, setBankNifty] = useState("45,449");
  const [enteredName, setEnteredName] = useState("");
  const [password, setPassword] = useState("");
  const [totp, setTotp] = useState("");
  const [broker, setBroker] = useState("");
  const [userId, setUserId] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [formData, setFormData] = useState([]);

  const handleAddSubmit = () => {
    const formDataObj = {
      accountName: enteredName,
      password: password,
      totp: totp,
      userId: userId,
      apiKey: apiKey,
      secretKey: secretKey,
      broker: broker, // Add the selected dropdown value
    };
    fetch("http://localhost:8000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
        BrokerList: formDataObj, // Send the form data string
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          // setUpdatedMainData(prev=>[...prev, formDataObj])
          setUpdatedMainData((prev) => {
            if (!Array.isArray(prev)) {
              return [formDataObj]; // Set prev to an empty array if it's not already an array
            }

            return [...prev, formDataObj];
          });
          console.log("Form data updated successfully");
          // console.log(mainData)
          // setFormData(updatedMainData); // Update the local state with the updated form data
        } else {
          console.error("Error updating form data inside:", data.data);
        }
      })
      .catch((error) => {
        console.error("Error updating form data:", error);
      });
  };

  // const [userData, setUserData] = useState("");

  // const [updatedMainData, setUpdatedMainData] = useState(
  //   JSON.parse(window.localStorage.getItem("userdata")).BrokerList
  // );
  // //  console.log(data)
  // let value;
  // const handleOptionChange = (e) => {
  //   setSelectedOption(e.target.value);
  //   setShowForm(true);
  // };

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   // Check if the user is logged in
  //   const token = window.localStorage.getItem("token");
  //   const email = window.localStorage.getItem("email");
  //   console.log(email, "email");
  //   const username = window.localStorage.getItem("username");
  //   if (token) {
  //     // User is logged in, fetch user data
  //     fetch("http://localhost:8000/checkAuth", {
  //       method: "POST",
  //       crossDomain: true,
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //       body: JSON.stringify({
  //         token: token,
  //         email: email,
  //         username: username,
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.status === "ok") {
  //           // User data fetched successfully
  //           setUserData(data.data);
  //           setIsLoggedIn(true);
  //         } else {
  //           // Token expired or invalid, clear localStorage and redirect to login
  //           window.localStorage.clear();
  //           window.location.href = "./sign-in";
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching user data:", error);
  //       });
  //   } else {
  //     // User is not logged in, redirect to login
  //     window.location.href = "./login";
  //   }
  // }, []);
  // console.log(userData);

  // if (!isLoggedIn) {
  //   // Render a loading state or redirect to login
  //   return <div>Loading...</div>;
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission logic here

  //   // Construct the form data object

  //   // setMainData(formDataObj)
  //   // Create a new array with the existing form data and the new form data object

  //   // Serialize the form data array as a string
  //   // const formDataString = JSON.stringify(updatedMainData, null, 2);

  //   // Send the updated form data string to the backend
  //   fetch("http://localhost:8000/userData", {
  //     method: "POST",
  //     crossDomain: true,
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     body: JSON.stringify({
  //       token: window.localStorage.getItem("token"),
  //       BrokerList: formDataObj, // Send the form data string
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.status) {
  //         // setUpdatedMainData(prev=>[...prev, formDataObj])
  //         setUpdatedMainData((prev) => {
  //           if (!Array.isArray(prev)) {
  //             return [formDataObj]; // Set prev to an empty array if it's not already an array
  //           }

  //           return [...prev, formDataObj];
  //         });
  //         console.log("Form data updated successfully");
  //         // console.log(mainData)
  //         // setFormData(updatedMainData); // Update the local state with the updated form data
  //       } else {
  //         console.error("Error updating form data inside:", data.data);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error updating form data:", error);
  //     });
  //   setShowForm(false);
  //   setShow(true);
  // };

  // const handleLogout = () => {
  //   // Clear token from local storage
  //   window.localStorage.removeItem("token");
  //   // Redirect to login page
  //   window.location.href = "./login";
  // };
  // function handleButtonClick(brokerName) {
  //   fetch("http://localhost:8000/generateToken", {
  //     method: "POST",
  //     crossDomain: true,
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     body: JSON.stringify({
  //       token: window.localStorage.getItem("token"),
  //       brokerName,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.status == true) {
  //         console.log("congrats yoda");
  //       } else {
  //         console.log("failed");
  //       }
  //     });
  // }

  return (
    <div className="flex flex-col px-[10rem] bg-black gap-4 w-ful h-full pt-[5rem] ">
      {/* header - nifty time  */}
      <div className="alert bg-transparent text-white border-none">
        <div className="flex flex-col gap-1">
          <h2 className="font-bold text-xl">Paper Trading</h2>

          <div className="text-md">
            Time: <b>{time}</b>, Nifty: <b>{nifty}</b>, BankNifty:{" "}
            <b>{bankNifty}</b>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <button className="btn" onClick={() => window.addModal.showModal()}>
          Add
        </button>
        <dialog id="addModal" className="modal ">
          <form method="dialog" className="modal-box  ">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <h4 className="font-bold my-4 flex flex-col text-md">Register</h4>
            <input
              onChange={(e) => {
                setEnteredName(e.target.value);
              }}
              type="text"
              placeholder="Name"
              className="input my-2 input-bordered w-full max-w-xs"
            />{" "}
            <input
              type="text"
              onChange={(e) => {
                setUserId(e.target.value);
              }}
              placeholder="User ID"
              className="input my-2 input-bordered w-full max-w-xs"
            />{" "}
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
              className="input my-2 input-bordered w-full max-w-xs"
            />{" "}
            <input
              type="text"
              onChange={(e) => {
                setApiKey(e.target.value);
              }}
              placeholder="API Key"
              className="input my-2 input-bordered w-full max-w-xs"
            />{" "}
            <input
              type="text"
              onChange={(e) => {
                setSecretKey(e.target.value);
              }}
              placeholder="Secret Key"
              className="input my-2 input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              onChange={(e) => {
                setTotp(e.target.value);
              }}
              placeholder="TOTP"
              className="input my-2 input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              onChange={(e) => {
                setBroker(e.target.value);
              }}
              placeholder="Broker"
              className="input my-2 input-bordered w-full max-w-xs"
            />
            <a onClick={handleAddSubmit} className="btn my-4 w-full">
              Submit
            </a>
          </form>
        </dialog>
      </div>
      {/* main area displays cards */}
      <div className="grid gap-x-2 gap-y-4 grid-cols-12">
        {/* use map  */}
        <PaperTradingCard />
        <PaperTradingCard />
        <PaperTradingCard />
        <PaperTradingCard />
        <PaperTradingCard />
        <PaperTradingCard />
        <PaperTradingCard />
      </div>
    </div>
  );
};

export default PaperTrading;
