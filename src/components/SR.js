import React, { useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function SR() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="grid gap-6 justify-center p-6 lg:grid-cols-4 xl:grid-cols-4 bg-[#FFF6E7] ">
        <Card className="w-full sm:w-80 md:w-96 lg:w-72  md:mt-0 mt-3 ">
          <CardHeader color="blue-gray" className="relative h-44">
            <img src={require('./gallery/S4.jpeg')} alt="Research Findings" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2 font-bold">
              RESEARCH FINDINGS
            </Typography>
            <Typography className="text-balance font-semibold">
              • Research Articles and Studies:<br />
              • Clinical Trials:<br />
              • Meta-Analyses and Systematic Reviews:<br />
              • Case Studies and Patient Testimonials:<br />
              • Expert commentaries and Interviews:
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 lg:mt-16">
            <Link to="/Reserch"><Button>Read More</Button></Link>
          </CardFooter>
        </Card>

        <Card className="w-full sm:w-80 md:w-96 lg:w-72  md:mt-0 mt-3 ">
            <CardHeader color="blue-gray" className="relative h-44 ">
              <img src={require('./gallery/S2.jpeg')} alt="Success Stories" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2 font-bold">
                SUCCESS STORIES
              </Typography>
              <Typography className="text-balance font-semibold">
                • Patient Profiles:<br />
                • Health Challenges:<br />
                • Treatment Journey:<br />
                • Progress and Results:<br />
                • Personal Testimonials:<br />
                • Practitioner Insights:<br />
                • Ethical Considerations:<br />
                • Diversity and Representation:
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 lg:mt-16">
              <Link to="/Success_story"><Button>Read More</Button></Link>
            </CardFooter>
          </Card>

          <Card className="w-full sm:w-80 md:w-96 lg:w-72  md:mt-0 mt-3">
            <CardHeader color="blue-gray" className="relative h-44">
              <img src={require('./gallery/S3.jpeg')} alt="Upcoming Events" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2 font-bold">
                UPCOMING EVENTS
              </Typography>
              <Typography className="text-balance font-semibold">
                • Savatol Foundation:<br />
                • 10,12,13 SEP 2014:<br />
                • Saswad-Pune:<br />
                • Registration Information:<br />
                • Agenda and Schedule:<br />
                • Featured Topics or Themes:<br />
                • Target Audience:<br />
                • Sponsorship and Partnerships:<br />
                • Social Sharing and Engagement:
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 lg:mt-5">
              <Link to="/Events"><Button>Read More</Button></Link>
            </CardFooter>
          </Card>

          <Card className="w-full sm:w-80 md:w-96 lg:w-72  md:mt-0 mt-3">
            <CardHeader color="blue-gray" className="relative h-44">
              <img src={require('./gallery/S1.jpg')} alt="Featured Articles" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2 font-bold">
                FEATURED ARTICLES
              </Typography>
              <Typography className="text-balance font-semibold">
                • Title:<br />
                • Authorship:<br />
                • Publication Date:<br />
                • Introduction or Teaser:<br />
                • Content Body:<br />
                • Visual Elements:<br />
                • Credible Sources and References:<br />
                • Social Sharing and Bookmarking:<br />
                • Related Articles or Resources:
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Link to="/FeaturdArticles"><Button>Read More</Button></Link>
            </CardFooter>
          </Card>

      </div>
    </>
  );
}
