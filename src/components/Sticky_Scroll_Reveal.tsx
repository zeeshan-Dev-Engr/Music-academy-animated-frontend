"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <Image
            src="https://plus.unsplash.com/premium_photo-1679865372673-8d1655a73b50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRvdXJpc218ZW58MHx8MHx8fDA%3D"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="https://plus.unsplash.com/premium_photo-1677002240252-af3f88114efc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
           <Image
            src="https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          
        </div>
      ),
    },
  ];

function Sticky_Scroll_Reveal() {
  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    target.style.overflowY = 'auto';
    target.style.scrollBehavior = 'smooth';
    target.scrollTop = 0;
    const scrollInterval = setInterval(() => {
      target.scrollTop += 1;
      if (target.scrollTop + target.clientHeight >= target.scrollHeight) {
        clearInterval(scrollInterval);
      }
    }, 50);

    target.addEventListener('mouseleave', () => {
      clearInterval(scrollInterval);
      target.style.overflowY = 'hidden';
    }, { once: true });
  };

  return (
    <div className="custom-scrollbar" onMouseEnter={handleMouseEnter}>
      <StickyScroll content={content} />
    </div>
  );
}

export default Sticky_Scroll_Reveal