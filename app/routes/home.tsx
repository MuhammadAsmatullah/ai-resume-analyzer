import Navbar from "~/Components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "~/Constants";
import ResumeCard from "~/Components/ResumeCard";
import ScoreCircle from "~/Components/ScoreCircle";
import { usePuterStore } from '~/lib/puter';
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router';


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for you dream job!" },
  ];
}

export default function Home() { 
   const { auth } = usePuterStore();
  
  const navigate = useNavigate();
  
 useEffect(() => {
    if(!auth.isAuthenticated) navigate('/auth?next=/');
  }, [auth.isAuthenticated])


 return <main className="bg-[url('/images/bg-main.svg')] bg-cover">

    <Navbar/>
<section className="main-section">
  <div className="page-heading py-16"> 
    <h1> Track Your Applications & Resume Ratings</h1>
    <h2> Review your submissions and check AI-powered feedback.</h2>

  </div>


{resumes.length > 0 && (
  <div className="resumes-section  ">
    {resumes.map((resume) => (
      <ResumeCard key={resume.id} resume={resume} />
    ))}
  </div>
)}
</section>

</main>;
}
