import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export function Faq() {
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
    <div className="mt-20 ml-2 mr-2 h-screen  bg-[url(back.jpg)] bg-no-repeat bg-cover	">
    <h1 class="mb-4 text-4xl font-extrabold justify-center flex leading-none tracking-tight text-gray-100 md:text-5xl lg:text-6xl pt-10">Frequently Asked Questions</h1>
      <div className=" rounded m-2 pt-12 p-10">
      <Accordion open={open === 1}>
        <AccordionHeader className="justify-center flex text-gray-300 hover:text-white" onClick={() => handleOpen(1)}>
        What is a digital assistant, and how does it work?</AccordionHeader>
        <AccordionBody  className="justify-center flex text-gray-100 text-lg">
        A digital assistant is an AI-powered software that can perform tasks or provide information based on voice commands or text input.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader className="justify-center flex text-gray-300 hover:text-white" onClick={() => handleOpen(2)}>
        Do I need to be a lawyer to use an AI-powered legal document generator?
        </AccordionHeader>
        <AccordionBody  className="justify-center flex text-gray-100 text-lg" >
          No. DocBuddy helps anyone with or without legal knowledge, genarate legal documents.
        </AccordionBody>
      </Accordion>
      <Accordion  open={open === 3}>
        <AccordionHeader className="justify-center flex text-gray-300 hover:text-white" onClick={() => handleOpen(3)}>
        Is it safe to use an AI-powered legal document generator?
        </AccordionHeader>
        <AccordionBody  className="justify-center flex text-gray-100 text-lg">
        Yes. 
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4}>
        <AccordionHeader className="justify-center flex text-gray-300 hover:text-white" onClick={() => handleOpen(4)}>
        Can digital assistants be used as evidence in court?
        </AccordionHeader>
        <AccordionBody  className="justify-center flex text-gray-100 text-lg" >
        Yes, recordings or data from digital assistants have been used as evidence in legal proceedings.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5}>
        <AccordionHeader className="justify-center flex text-gray-300 hover:text-white" onClick={() => handleOpen(5)}>
        Can I be held legally responsible for commands I give to a digital assistant?
        </AccordionHeader>
        <AccordionBody  className="justify-center flex text-gray-100 text-lg" >
        Yes, you are responsible for actions taken by a digital assistant on your behalf, especially if those actions result in legal consequences.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6}>
        <AccordionHeader className="justify-center flex text-gray-300 hover:text-white" onClick={() => handleOpen(6)}>
          What types of legal documents can an AI-powered generator create?</AccordionHeader>
        <AccordionBody  className="justify-center flex text-gray-100 text-lg">
          The AI powered chatbot essentially helps user in navigating through the website according to the user&apos; requirement.
          The chatbot will also automatically help you find legal help in your city by recommending list of laywers in required city.

        </AccordionBody>
      </Accordion>
      </div>
      </div>
    </>
  );
};
export default Faq;