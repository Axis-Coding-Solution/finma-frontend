import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { InputError } from "@/components/ui/input-error";
import { Label } from "@/components/ui/label";
import { MainHeading } from "@/pages/components/common";
import { privacyPolicyInitialValues } from "@/utils/initial-values";
import { privacyPolicySchema } from "@/utils/validation-schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Privacy = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate(-1);
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: privacyPolicyInitialValues,
    resolver: yupResolver(privacyPolicySchema as any),
  });

  const onSubmitHandler = async (data: typeof privacyPolicyInitialValues) => {
    console.log(data);
    navigate("/auth/sign-up/email");
  };
  return (
    <>
      <div className="container bg-white rounded-xl p-5">
        <div className="flex justify-center">
          <MainHeading
            heading="Review and accept our Terms and Privacy Policy"
            paragraph="To join FinmaAI, please review and accept our Service Terms and Privacy Policy to ensure you understand how we operate and protect your information."
          />
        </div>
        <div className="flex flex-col md:flex-row justify-start md:mx-10 my-5 gap-2">
          <Link to="/terms-of-use">
            <Button
              variant={
                location.pathname == "/terms-of-use" ? "dark" : "outline"
              }
            >
              Terms & Conditions
            </Button>
          </Link>
          <Link to="/privacy-policy">
            <Button
              variant={
                location.pathname == "/terms-of-use" ? "outline" : "dark"
              }
            >
              Privacy Policy
            </Button>
          </Link>
        </div>
        <div className="md:mx-10 my-5 ">
          <h1 className="font-bold">1.Introduction</h1>
          <p>
            Welcome to FinmaAI! By signing up for our platform, you agree to the
            following terms and conditions (the "Service Terms"). These Service
            Terms govern your use of FinmaAI's services, including our website,
            AI evaluation tool, community forum, and any related services
            (collectively, the "Services"). Please read these terms carefully.
          </p>
        </div>
        <div className="md:mx-10 my-5 ">
          <h1 className="font-bold">2. Acceptance of Terms</h1>
          <p>
            By accessing or using the Services, you agree to be bound by these
            Service Terms. If you do not agree to these terms, do not use the
            Services. We may update these terms from time to time, and your
            continued use of the Services constitutes acceptance of those
            changes.
          </p>
        </div>
        <div className="md:mx-10 my-5 ">
          <h1 className="font-bold">3. Eligibility</h1>
          <p>
            You must be at least 18 years old to use the Services. By using the
            Services, you represent and warrant that you meet this age
            requirement and that you have the legal capacity to enter into this
            agreement.
          </p>
        </div>
        <div className="md:mx-10 my-5 ">
          <h1 className="font-bold">4. Account Registration</h1>
          <p>
            To use certain features of the Services, you must register for an
            account. You agree to provide accurate, current, and complete
            information during the registration process and to update such
            information to keep it accurate, current, and complete. You are
            responsible for safeguarding your account password and for any
            activities or actions under your account.
          </p>
        </div>
        <div className="md:mx-10 my-5 ">
          <h1 className="font-bold">5. Use of Services</h1>
          <span>
            You agree to use the Services only for lawful purposes and in
            accordance with these Service Terms. You agree not to:
            <ul className="list-disc ml-5">
              <li>
                Use the Services in any manner that could disable, overburden,
                or impair the Services.
              </li>
              <li>
                Attempt to gain unauthorized access to any part of the Services.
              </li>
              <li>
                Use the Services to store or transmit any material that is
                harmful or prohibited by these Service Terms.
              </li>
              <li>Use any automated means to access the Services.</li>
              <li>
                Use the Services for any commercial purposes without our prior
                written consent.
              </li>
            </ul>
          </span>
        </div>
        <div className="md:mx-10 my-5 ">
          <h1 className="font-bold">6. Subscription and Payment</h1>
          <p>
            Certain features of the Services may require a subscription or
            payment. By subscribing to these features, you agree to pay all
            applicable fees. Subscription fees are non-refundable, except as
            required by law. We reserve the right to change the subscription
            fees at any time, with prior notice to you.
          </p>
        </div>
        <div className="md:mx-10 my-5 ">
          <h1 className="font-bold">7. Content and Intellectual Property</h1>
          <p>
            All content and materials provided through the Services, including
            text, graphics, logos, and software, are the property of FinmaAI or
            its licensors and are protected by intellectual property laws. You
            may not reproduce, distribute, or create derivative works from any
            content or materials provided through the Services without our prior
            written consent.
          </p>
        </div>
        <div className="md:mx-10 my-5 ">
          <h1 className="font-bold">8. User-Generated Content</h1>
          <p>
            You may submit content, including comments and feedback, to the
            Services. By submitting content, you grant FinmaAI a non-exclusive,
            worldwide, royalty-free license to use, reproduce, modify, and
            distribute your content in connection with the Services. You
            represent and warrant that you have the rights to any content you
            submit and that your content does not violate any third-party rights
            or applicable laws.
          </p>
        </div>
        <div className="md:mx-10 my-5 ">
          <h1 className="font-bold">9. Privacy Policy</h1>
          <p>
            Your use of the Services is also governed by our Privacy Policy,
            which is incorporated by reference into these Service Terms. Please
            review our Privacy Policy to understand our practices regarding your
            personal information.
          </p>
        </div>
        <div className="md:mx-10 my-5 ">
          <h1 className="font-bold">10. Disclaimer of Warranties</h1>
          <p>
            The Services are provided "as is" and "as available" without any
            warranties of any kind, either express or implied. FinmaAI does not
            warrant that the Services will be uninterrupted or error-free, and
            FinmaAI disclaims all warranties, express or implied, including but
            not limited to, warranties of merchantability, fitness for a
            particular purpose, and non-infringement.
          </p>
        </div>
        <div className="md:mx-10 my-5 ">
          <h1 className="font-bold">11. Limitation of Liability</h1>
          <p>
            To the fullest extent permitted by law, FinmaAI shall not be liable
            for any indirect, incidental, special, consequential, or punitive
            damages, or any loss of profits or revenues, whether incurred
            directly or indirectly, or any loss of data, use, goodwill, or other
            intangible losses, resulting from (a) your use or inability to use
            the Services; (b) any unauthorized access to or use of our servers
            and/or any personal information stored therein; (c) any bugs,
            viruses, trojan horses, or the like that may be transmitted to or
            through our Services by any third party; or (d) any errors or
            omissions in any content or for any loss or damage of any kind
            incurred as a result of your use of any content posted, emailed,
            transmitted, or otherwise made available via the Services.
          </p>
        </div>
        <div className="md:mx-10 my-5 ">
          <h1 className="font-bold">12. Indemnification</h1>
          <p>
            You agree to indemnify and hold harmless FinmaAI and its affiliates,
            officers, agents, and employees from and against any claims,
            liabilities, damages, losses, and expenses, including without
            limitation, reasonable legal and accounting fees, arising out of or
            in any way connected with your access to or use of the Services or
            your violation of these Service Terms.
          </p>
        </div>
        <div className="md:mx-10 my-5 ">
          <h1 className="font-bold">13. Governing Law</h1>
          <p>
            These Service Terms shall be governed by and construed in accordance
            with the French Law, without regard to its conflict of law
            principles. Any disputes arising out of or relating to these Service
            Terms or the Services shall be resolved exclusively in the courts of
            the City of Paris.
          </p>
        </div>
        <div className="md:mx-10 my-5 ">
          <h1 className="font-bold">14. Termination</h1>
          <p>
            We may terminate or suspend your access to the Services at any time,
            without prior notice or liability, for any reason whatsoever,
            including without limitation if you breach these Service Terms. Upon
            termination, your right to use the Services will immediately cease.
          </p>
        </div>
        <div className="md:mx-10 my-5 ">
          <h1 className="font-bold">15. Contact Information</h1>
          <p>
            If you have any questions about these Service Terms, please contact
            us at admin@finma.ai
          </p>
        </div>
        <hr />
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="flex flex-col gap-5 md:mx-10 mt-5"
        >
          <div>
            <div className="flex gap-4 items-start mb-1">
              <Controller
                name="isAgreeServicesTerms"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    id="servicesTerms"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
              />
              <Label htmlFor="servicesTerms" className="mb-0 font-bold">
                By clicking "I Agree" and signing up for the Services, you
                acknowledge that you have read, understood, and agree to be
                bound by these Service Terms.
              </Label>
            </div>
            <InputError error={errors.isAgreeServicesTerms} />
          </div>
          <div>
            <div className="flex gap-4 items-start mb-1">
              <Controller
                name="isAgreeServicesPolicy"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    id="servicesPolicy"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
              />
              <Label
                htmlFor="servicesPolicy"
                className="mb-0 font-bold leading-5"
              >
                By clicking "I Agree" and signing up for the Services, you By
                using the Services, you acknowledge that you have read and
                understood this Privacy Policy and agree to our collection, use,
                and disclosure of your personal information as described herein.
              </Label>
            </div>
            <InputError error={errors.isAgreeServicesPolicy} />
          </div>
          <div className=" flex flex-col md:flex-row gap-2 justify-between">
            <Button variant="outline" onClick={handleCancel}>
              {" "}
              Cancel
            </Button>
            <Button variant="default" type="submit">
              {" "}
              Continue
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Privacy;