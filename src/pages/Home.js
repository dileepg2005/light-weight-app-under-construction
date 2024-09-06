import React, { useState } from "react";
import {
  addDoc,
  collection,
  db,
  Timestamp,
  query,
  where,
  getDocs,
} from "../firebase/config";

const Home = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleInputChange = (e) => {
    const { value } = e.target;
    console.log(value);
    setEmail(value);
  };

  const subscribeUser = async (e) => {
    e.preventDefault();
    let isRecordPresent = false;
    try {
      const subscribersRef = collection(db, "advancedSubscribers");

      const q = query(subscribersRef, where("email", "==", email));
      const subscriberQuerySnapshot = await getDocs(q);

      subscriberQuerySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        isRecordPresent = true;
      });
      if (isRecordPresent) {
      } else {
        const docRef = await addDoc(subscribersRef, {
          email: email,
          createdAt: Timestamp.now().toDate(),
        });
        // console.log("Document written with ID: ", docRef.id);
      }
      setIsSubscribed(true);
    } catch (error) {
      // console.log(error.message);
      setIsError(true);
    }
    setEmail("");
  };

  return (
    <>
      <section
        data-w-id="34de63c7-fb48-52c6-3e46-352ce7c4b451"
        style={{ opacity: 0 }}
        className="section"
      >
        <div className="div-right">
          <h1 className="heading-3">Lightweight App For You</h1>
        </div>
        <div className="div-triangle" />
        <div className="div-left">
          <h1 className="heading">
            Our WebSite <br />
            is Coming Soon
          </h1>
          <p className="paragraph">
            Our website is currently under construction, but we're excited to
            introduce you to our upcoming lightweight web applications designed
            to be fast, responsive, and user-friendly. Sign up below to receive
            updates and to be notified when we launch.
          </p>

          <div className="w-form">
            {!isSubscribed && (
              <form
                id="email-form"
                name="email-form"
                data-name="Email Form"
                method="post"
                action="#"
                className="form"
                data-wf-page-id="66d845c3083f6930091c9ab2"
                data-wf-element-id="5033c374-8278-c424-179d-bd0d0509b925"
                onSubmit={(e) => subscribeUser(e)}
              >
                <input
                  className="text-field w-input"
                  maxLength={256}
                  name="email"
                  data-name="Email"
                  placeholder="Enter email address..."
                  type="email"
                  id="email"
                  required=""
                  onChange={(e) => handleInputChange(e)}
                />
                <input
                  type="submit"
                  data-wait="Please wait..."
                  id="subscribe"
                  data-w-id="5033c374-8278-c424-179d-bd0d0509b927"
                  style={{
                    backgroundColor: "rgba(NaN,NaN,NaN,undefined)",
                    color: "rgba(NaN,NaN,NaN,undefined)",
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="submit-button w-button"
                  defaultValue="Sign Up!"
                />
              </form>
            )}
            {isSubscribed && (
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
            )}
            {isError && (
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="section-mobile">
        <div className="div-right-mobile">
          <h1 className="heading-3">Lightweight App For You</h1>
        </div>
        <div className="div-left-mobile">
          <h1 className="heading">
            Our WebSite <br />
            is Coming Soon
          </h1>
          <p className="paragraph">
            Our website is currently under construction, but we're excited to
            introduce you to our upcoming lightweight web applications designed
            to be fast, responsive, and user-friendly. Stay tuned for a
            powerful, efficient, and seamless web experience tailored to meet
            your needs!
          </p>
          <div className="w-form">
            {!isSubscribed && (
              <form
                id="email-form"
                name="email-form"
                method="post"
                action="#"
                className="form"
                data-wf-page-id="66d845c3083f6930091c9ab2"
                data-wf-element-id="d1452378-147a-67f7-5cca-22939fd523a3"
                onSubmit={(e) => subscribeUser(e)}
              >
                <input
                  className="text-field w-input"
                  maxLength={256}
                  name="email"
                  data-name="email"
                  placeholder="Enter email address..."
                  type="email"
                  id="email"
                  required=""
                  onChange={(e) => handleInputChange(e)}
                />
                <input
                  type="submit"
                  data-wait="Please wait..."
                  id="subscribe"
                  data-w-id="d1452378-147a-67f7-5cca-22939fd523aa"
                  style={{
                    backgroundColor: "rgba(NaN,NaN,NaN,undefined)",
                    color: "rgba(NaN,NaN,NaN,undefined)",
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="submit-button w-button"
                  defaultValue="Sign Up!"
                />
              </form>
            )}
            {isSubscribed && (
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
            )}
            {isError && (
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
