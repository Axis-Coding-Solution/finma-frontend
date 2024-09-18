import { Link } from "react-router-dom";

export const PrivacyPolicyTab = () => {
  return (
    <div className="flex flex-col 2xl:gap-4 gap-2">
      <div>
        <h1 className="font-bold">1.Introduction</h1>
        <p>
          Welcome to FinmaAI! By signing up for our platform, you agree to the
          following terms and conditions (the "Service Terms"). These Service
          Terms govern your use of FinmaAI's services, including our website, AI
          evaluation tool, community forum, and any related services
          (collectively, the "Services"). Please read these terms carefully.
        </p>
      </div>
      <div>
        <h1 className="font-bold">2. Information We Collect</h1>
        <p>
          We collect various types of information in connection with the
          Services, including:
          <div className="flex flex-col gap-2 mt-2">
            <h1>
              <span className="font-bold"> a) Personal Information: </span>
              Information that can be used to identify you, such as your name,
              email address, phone number, and payment information.
            </h1>
            <h1>
              <span className="font-bold">b) Usage Data:</span> Information
              about how you interact with the Services, such as your IP address,
              browser type, pages visited, and the time and date of your visits
            </h1>
            <h1>
              <span className="font-bold">c) Content Data:</span> Information
              you provide when you use our Services, such as comments, feedback,
              and other content you submit.
            </h1>
            <h1>
              <span className="font-bold">d) Technical Data:</span> Information
              collected through cookies, web beacons, and other tracking
              technologies, such as device information, browser type, and
              operating system.
            </h1>
          </div>
        </p>
      </div>
      <div>
        <h1 className="font-bold">3. How We Use Your Information</h1>
        <p>
          We use the information we collect for various purposes, including:
        </p>
        <div className="flex flex-col gap-2 mt-2">
          <h1>
            <span className="font-bold">
              {" "}
              a) To Provide and Improve the Services:{" "}
            </span>
            We use your personal information to deliver the Services, process
            your transactions, and improve the overall user experience.
          </h1>
          <h1>
            <span className="font-bold">b) To Communicate with You:</span> We
            use your contact information to send you updates, newsletters,
            marketing materials, and other information that may be of interest
            to you.
          </h1>
          <h1>
            <span className="font-bold">
              c) To Analyze and Understand Usage:
            </span>{" "}
            We use usage data to analyze how users interact with the Services,
            identify trends, and improve the functionality and performance of
            the Services.
          </h1>
          <h1>
            <span className="font-bold">d) To Ensure Security:</span> We use
            technical data to protect the security and integrity of the
            Services, detect and prevent fraudulent activities, and comply with
            legal obligations.
          </h1>
        </div>
      </div>
      <div>
        <h1 className="font-bold">4. Sharing Your Information</h1>
        <p>
          We may share your information with third parties in the following
          circumstances:
        </p>
        <div className="flex flex-col gap-2 mt-2">
          <h1>
            <span className="font-bold"> a) Service Providers: </span>
            We may share your information with third-party service providers who
            perform services on our behalf, such as payment processing, data
            analysis, and marketing assistance.
          </h1>
          <h1>
            <span className="font-bold">b) Legal Requirements:</span> We may
            disclose your information if required to do so by law or in response
            to valid requests by public authorities (e.g., a court or government
            agency).
          </h1>
          <h1>
            <span className="font-bold">c) Business Transfers: </span> In the
            event of a merger, acquisition, or sale of all or a portion of our
            assets, your personal information may be transferred to the new
            owner.
          </h1>
          <h1>
            <span className="font-bold">d) With Your Consent:</span> We may
            share your information with third parties when we have your consent
            to do so
          </h1>
        </div>
      </div>
      <div>
        <h1 className="font-bold">5. Data Security</h1>
        <span>
          We implement reasonable security measures to protect your personal
          information from unauthorized access, use, or disclosure. However, no
          method of transmission over the Internet or electronic storage is 100%
          secure, and we cannot guarantee absolute security.
        </span>
      </div>
      <div>
        <h1 className="font-bold">6. Your Choices and Rights</h1>
        <p>
          You have certain rights regarding your personal information,
          including:
        </p>
        <div className="flex flex-col gap-2 mt-2">
          <h1>
            <span className="font-bold">a) Access and Update: </span>
            You can access and update your personal information through your
            account settings
          </h1>
          <h1>
            <span className="font-bold">b) Opt-Out:</span> You can opt out of
            receiving marketing communications from us by following the
            unsubscribe instructions included in those communications.
          </h1>
          <h1>
            <span className="font-bold">c) Data Deletion: </span> You can
            request the deletion of your personal information by contacting us
            at [Your Contact Information]. Please note that we may retain
            certain information as required by law or for legitimate business
            purposes.
          </h1>
        </div>
      </div>
      <div>
        <h1 className="font-bold">7. Cookies and Tracking Technologies</h1>
        <p>
          We use cookies and similar tracking technologies to collect usage data
          and improve the functionality and performance of the Services. You can
          manage your cookie preferences through your browser settings.
        </p>
      </div>
      <div>
        <h1 className="font-bold">8. Third-Party Links</h1>
        <p>
          The Services may contain links to third-party websites. We are not
          responsible for the privacy practices or the content of such websites.
          We encourage you to read the privacy policies of any third-party
          websites you visit.
        </p>
      </div>
      <div>
        <h1 className="font-bold">9. Children’s Privacy</h1>
        <p>
          The Services are not intended for individuals under the age of 18. We
          do not knowingly collect personal information from children under 18.
          If we become aware that we have collected personal information from a
          child under 18, we will take steps to delete such information.
        </p>
      </div>
      <div>
        <h1 className="font-bold">10. Changes to This Privacy Policy</h1>
        <p>
          The Services are provided "as is" and "as available" without any
          warranties of any kind, either express or implied. FinmaAI does not
          warrant that the Services will be uninterrupted or error-free, and
          FinmaAI disclaims all warranties, express or implied, including but
          not limited to, warranties of merchantability, fitness for a
          particular purpose, and non-infringement.
        </p>
      </div>
      <div>
        <h1 className="font-bold">11. Contact Us</h1>
        <p>
          If you have any questions about this Privacy Policy or our privacy
          practices, please contact us at:
          <br />
          <br />
          FinmaAI Paris, 75004
          <br />
          <Link
            to="mailto:admin@finma.ai"
            className="text-blue-500 hover:underline hover:underline-offset-2"
          >
            admin@finma.ai
          </Link>
        </p>
      </div>
    </div>
  );
};
