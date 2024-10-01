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
              {/* • Research Articles and Studies:<br />
              • Clinical Trials:<br />
              • Meta-Analyses and Systematic Reviews:<br />
              • Case Studies and Patient Testimonials:<br />
              • Expert commentaries and Interviews:*/}
             Overview of Ayurveda, its ancient origins and core principles like Doshas 
             (Vata, Pitta, Kapha). It describes diagnostic methods, such as pulse and tongue analysis, 
             and therapeutic approaches like herbal remedies, dietary guidance, and detox procedures. 
             Recent studies on its effectiveness and research on key herbs are also summarized...
            </Typography> 
          </CardBody>
          <CardFooter className="pt-0 lg:mt-2">
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
                
                The section highlights various success stories through patient profiles, detailing health challenges, 
                treatment journeys, and progress achieved. It includes personal testimonials, insights from practitioners, 
                and emphasizes ethical considerations. The content also reflects on diversity and representation in healthcare experiences...
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 lg:mt-2">
              {/* <Link to="/Success_story"> */}
              
              <Link to="/what_we_stands_for"><Button disabled>Read More</Button></Link>
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
                {/* • Savatol Foundation:<br />
                • 10,12,13 SEP 2014:<br />
                • Saswad-Pune:<br />
                • Registration Information:<br />
                • Agenda and Schedule:<br />
                • Featured Topics or Themes:<br />
                • Target Audience:<br />
                • Sponsorship and Partnerships:<br />
                • Social Sharing and Engagement: */}
                This section outlines upcoming events organized by the Svatol Foundation, 
                scheduled for September 10, 12, and 13, 2014, in Saswad-Pune. 
                It provides registration details, agenda, featured topics, and themes. 
                Information about the target audience, sponsorships, and opportunities for social sharing and engagement are also included...
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 lg:mt-2">
              <Link to="/Events"><Button>Read More</Button></Link>
            </CardFooter>
          </Card>

          <Card className="w-full sm:w-80 md:w-96 lg:w-72  md:mt-0 mt-3">
            <CardHeader color="blue-gray" className="relative h-44">
              <img src={require('./gallery/S1.jpg')} alt="Featured Articles" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2 font-bold">
                {/* FEATURED ARTICLES */}
                Ayurveda Simplified
              </Typography>
              <Typography className="text-balance font-semibold">
                {/* • Title:<br />
                • Authorship:<br />
                • Publication Date:<br />
                • Introduction or Teaser:<br />
                • Content Body:<br />
                • Visual Elements:<br />
                • Credible Sources and References:<br />
                • Social Sharing and Bookmarking:<br />
                • Related Articles or Resources: */}
                Ayurvedic diet and nutrition, focusing on balance through tailored dietary plans for the three doshas—Vata, 
                Pitta, and Kapha. It emphasizes using the six tastes (sweet, sour, salty, bitter, pungent, astringent) and choosing fresh,
                seasonal foods. Mindful eating and proper cooking methods are also highlighted, promoting overall health and harmony...
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 lg:mt-2">
              <Link to="/FeaturdArticles"><Button>Read More</Button></Link>
            </CardFooter>
          </Card>

      </div>
    </>
  );
}
