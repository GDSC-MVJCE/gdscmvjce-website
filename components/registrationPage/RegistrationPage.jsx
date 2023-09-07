import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Xarrow, { Xwrapper } from "react-xarrows";

import {
  ActionsContainer,
  ApplyButton,
  ApplyNowContainer,
  BannerImageContainer,
  FAQButton,
  ProceduresContainer,
  ProcessCard,
  RegistrationPageContainer,
  TeamImageContainer,
  TitleContainer
} from "./RegistrationPage.styled";
import Typography from "../display/typography/Typography";
import ApplicationIcon from "@public/icons/application.svg";
import ClipboardIcon from "@public/icons/clipboard.svg";
import UserIcon from "@public/icons/user.svg";

const applicationData = {
  isOpen: false,
  link: "https://forms.gle/tFG8cDgtThaa3H4p8"
};

const RegistrationPage = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  return (
    <RegistrationPageContainer>
      <TitleContainer>
        <Typography variant="displayLarge">Join our amazing Team</Typography>

        <Typography variant="body" className="descriptionText">
          {`Passionate about tech, innovation, and community? Be
          part of an energetic team.`}
        </Typography>
      </TitleContainer>

      <BannerImageContainer>
        <Image
          src="/images/group-photo.png"
          alt={"GDSC Team"}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
          fill="responsive"
          style={{
            borderRadius: "inherit",
            objectFit: "cover"
          }}
        />
      </BannerImageContainer>

      <ProceduresContainer>
        <Typography variant="h2">Application Process</Typography>

        <Xwrapper>
          <ProcessCard className="card-1" ref={ref1}>
            <ApplicationIcon className="icon" />
            <Typography className="bodyEmphasized">Fill the form</Typography>
          </ProcessCard>
          <ProcessCard className="card-2" ref={ref2}>
            <ClipboardIcon className="icon" />
            <Typography className="bodyEmphasized">
              Complete the tasks
            </Typography>
          </ProcessCard>
          <ProcessCard className="card-3" ref={ref3}>
            <UserIcon className="icon" />
            <Typography className="bodyEmphasized">
              Take the interview
            </Typography>
          </ProcessCard>

          <Xarrow
            start={ref1}
            end={ref2}
            headShape={"circle"}
            headSize={3}
            startAnchor={"middle"}
          />
          <Xarrow
            start={ref2}
            end={ref3}
            headShape={"circle"}
            headSize={3}
            startAnchor={"middle"}
          />
        </Xwrapper>
      </ProceduresContainer>
      <TeamImageContainer>
        <Image
          src="/images/gdsc-team.svg"
          alt={"Illustration"}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
          fill="responsive"
          style={{
            borderRadius: "inherit",
            objectFit: "cover"
          }}
        />
      </TeamImageContainer>
      <ApplyNowContainer>
        <Typography variant="h2" style={{ textAlign: "center" }}>
          What are you waiting for?
        </Typography>
        <Typography variant="body" className="applyDescription">
          {`If you're excited to learn, collaborate, and push boundaries, don't wait.
          Apply now and embark on a journey of growth and possibilities!`}
        </Typography>
        <ActionsContainer>
          <Link
            href={applicationData.link ? applicationData.link : "#"}
            target="_blank"
          >
            <ApplyButton disabled={!applicationData.isOpen}>
              {applicationData.isOpen
                ? "Apply Now"
                : "Applications are closed. Stay tuned"}
            </ApplyButton>
          </Link>
          <Link href="/faq">
            <FAQButton>Read the FAQ</FAQButton>
          </Link>
        </ActionsContainer>
      </ApplyNowContainer>
    </RegistrationPageContainer>
  );
};

export default RegistrationPage;
